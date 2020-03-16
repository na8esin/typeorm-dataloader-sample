import "reflect-metadata";
import { createConnection, getRepository, Connection, In } from "typeorm";
import { ExpertiseFieldUser } from "./entity/expertise-field-user";
import { ExpertiseField } from "./entity/expertise-field";
import { getCreateConnection } from "./getCreateConnection";

require("dotenv").config();

async function main(): Promise<Connection> {
  const connection = await getCreateConnection();
  await getExpertiseField();
  return connection;
}

async function getExpertiseField() {
  const repo = getRepository(ExpertiseFieldUser);
  const entitys: ExpertiseFieldUser[] = await repo.find({
    userId: In([100, 50])
  });

  console.log(entitys);
}

main().then(connection => {
  console.log("end!");
  connection.close();
});
