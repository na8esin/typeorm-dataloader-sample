import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import { ConnectionManager, ConnectionOptions, Not } from "typeorm";
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

  // まずは全クライアントを取得するためにmasterにつなぐ
  const connection = await connectionManager
    .create(getDbConfig("master"))
    .connect();

  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();

  // 全クライアントを取得する　→　全クライアントは必要ないね。default=demoとmasterがあればいいね
  // 面倒だから、全クライアントを取得しておくのはいいけど。データも少ないし
  const clientRepository = await queryRunner.manager.getRepository(
    ClientEntity
  );
  const client = await clientRepository.find({
    dbConfName: Not("master")
  });

  //console.log(Object.assign(client, sessionId));

  await getAllDbConfig(client, connectionManager);

  const nakataClients = await connectionManager
    .get("nakata")
    .getRepository(ClientEntity)
    .find();
  console.log(Object.assign(nakataClients, sessionId));

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

function getDbConfig(databaseName): ConnectionOptions {
  const dbConfig: ConnectionOptions = {
    name: databaseName,
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: databaseName
  };
  return dbConfig;
}

async function getAllDbConfig(
  clients: ClientEntity[],
  connectionManager: ConnectionManager
) {
  for (var i = 0; i < clients.length; i++) {
    await connectionManager
      .create(getDbConfig(clients[i].dbConfName))
      .connect();
  }
  return connectionManager;
}
