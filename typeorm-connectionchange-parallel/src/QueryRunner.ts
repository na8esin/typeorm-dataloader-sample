import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import {
  createConnection,
  getRepository,
  getConnectionManager,
  getConnection
} from "typeorm";
import { ClientEntity } from "./entity/client.entity";

const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

app.get("/clients", async function (req: Request, res: Response) {
  const databaseName = req.query.db;
  const sessionId = { sessionId: req.query.sessionId };

  console.log(sessionId.sessionId + ":" + databaseName);

  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "",
    password: "",
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: databaseName
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
  if (getConnectionManager().has("default") && getConnection().isConnected) {
    console.log("databaseChange");
    const connection = await getConnection();
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
