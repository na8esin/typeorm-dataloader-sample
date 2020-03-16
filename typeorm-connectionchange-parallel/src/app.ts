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

// create and setup express app
const app = express();
app.use(bodyParser.json());

// register routes

app.get("/clients", async function(req: Request, res: Response) {
  const databaseName = req.query.db;
  const sessionId = { sessionId: req.query.sessionId };

  //console.log(sessionId.sessionId + ":" + "start clients");

  if (getConnectionManager().has("default") && getConnection().isConnected) {
    console.log("databaseChange");
    const connection = await getConnection();
    await connection.close().then(() => console.log("connection closing."));
  }

  console.log(sessionId.sessionId + ":" + databaseName);

  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "gaina",
    password: "Ifc@130122",
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: databaseName
  });
  const clientRepository = getRepository(ClientEntity);
  const client = await clientRepository.findOne({
    where: { clientKey: "demo" }
  });
  console.log(Object.assign(client, sessionId));
  res.send(client);
});

// start express server
app.listen(3000, () => console.log("Example app listening on port 3000!"));
