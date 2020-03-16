import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import {
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getRepository
} from "typeorm";
import { ClientEntity } from "./entity/client.entity";
import { ProductEntity } from "./entity/product.entity";

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

app.get("/clients", async function(req: Request, res: Response) {
  const clientKey = req.query.db;
  const sessionId = { sessionId: req.query.sessionId };

  const client = await getclient(clientKey);

  console.log(Object.assign(client, sessionId));

  // 後でクローズに使うからグローバルにしておかないと
  const connectionManager = new ConnectionManager();

  // 特定のクライアントに接続する
  // そしてそのスキーマをデフォルトと呼ぶ
  // defaulQueryRunnerもreleaseで使うからグローバルにしておかないと
  // 実際nest上では↓はインジェクションできるようにしないといけない
  const defaulQueryRunner = await createQueryRunner(
    client.dbConfName,
    connectionManager
  );

  // productを取得する
  const productRepository = defaulQueryRunner.manager.getRepository(
    ProductEntity
  );
  const product = await productRepository.find();
  console.log(Object.assign(product, sessionId));

  // ランナーは毎回接続を閉じる必要がある
  await defaulQueryRunner.release();

  //console.log(connectionManager.connections[0]);

  /* これがないとコネクションがたまり続ける*/
  if (
    connectionManager.has("default") &&
    // forで回して全クローズでもいいけど
    //    connectionManager.connections[0].isConnected

    connectionManager.get("default").isConnected
  ) {
    await connectionManager.connections[0]
      .close()
      .then(() => console.log("connection closing."));
  }

  await res.send(product);
});

// start express server
app.listen(3000, async function() {
  // まずは全クライアントを取得するためにmasterにつなぐ
  // ここはべた書きでもいいくらい
  // 後masterはコネクションプールでOK
  // 接続が切れた場合は再接続する必要があるのか？ →　ない
  // 後初回起動時にDBにつながんないとかどうすればいいのか？
  //   この場合は自動で再接続できなかったので、
  //      nodeの起動自体を禁止するか？
  //      一定時間置いて、再接続し続けるか？
  await createConnection(getDbConfig("master"));
  console.log("Example app listening on port 3000!");
});

async function createQueryRunner(
  dbConfName: string,
  connectionManager: ConnectionManager
) {
  const defaulConnection = await connectionManager
    .create(getDbConfig(dbConfName))
    .connect();
  const defaulQueryRunner = defaulConnection.createQueryRunner();
  await defaulQueryRunner.connect();
  return defaulQueryRunner;
}

async function getclient(clientKey): Promise<ClientEntity> {
  const clientRepository = getRepository(ClientEntity);
  return await clientRepository.findOne({
    where: { clientKey: clientKey }
  });
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send("error", { error: err });
}

function getDbConfig(databaseName: string): ConnectionOptions {
  const dbConfig: ConnectionOptions = {
    type: "mysql",
    host: "192.168.99.35",
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
