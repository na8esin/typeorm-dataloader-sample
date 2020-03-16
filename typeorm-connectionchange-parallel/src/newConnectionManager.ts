import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import { ConnectionManager } from "typeorm";
import { ClientEntity } from "./entity/client.entity";

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

app.get("/clients", async function(req: Request, res: Response) {
  const databaseName = req.query.db;
  const sessionId = { sessionId: req.query.sessionId };

  console.log(sessionId.sessionId + ":" + databaseName);

  const connectionManager = new ConnectionManager();

  const connection = connectionManager.create({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: databaseName
  });

  await connection.connect().catch(error => {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      setTimeout(() => {
        connection.connect().catch(error => {
          res.send('{"hogecho":1}');
        });
      }, 2000);
    }
  });

  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();

  const clientRepository = await queryRunner.manager.getRepository(
    ClientEntity
  );
  const client = await clientRepository
    .findOne({
      where: { clientKey: "demo" }
    })
    .catch(err => {
      res.send(err);
    });

  console.log(Object.assign(client, sessionId));

  await queryRunner.release();
  if (connectionManager.has("default") && connection.isConnected) {
    await connection.close().then(() => console.log("connection closing."));
  }
  await res.send(client);
});

// start express server
app.listen(3000, () => console.log("Example app listening on port 3000!"));

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send("error", { error: err });
}
