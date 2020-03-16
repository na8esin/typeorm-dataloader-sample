import "reflect-metadata";
import { createConnection, getRepository, Connection, In } from "typeorm";
import { ExpertiseFieldUser } from "../entity/expertise-field-user";
import { ExpertiseField } from "../entity/expertise-field";

require("dotenv").config();

async function main(): Promise<Connection> {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: true,
    database: "demo"
  });

  const repo = getRepository(ExpertiseFieldUser);
  const entity = await repo.find({ userId: In([100, 50]) });
  //console.log(entity);

  await getExpertiseField();

  return connection;
}

async function getExpertiseField() {
  const repo = getRepository(ExpertiseField);
  const entity: ExpertiseField[] = await repo.find();
  console.log(entity);
  entity.forEach(e => {
    console.log(e.expertiseFieldUsers);
  });
}

main().then(connection => {
  console.log("end!");
  connection.close();
});
