import "reflect-metadata";
import { getRepository, Connection } from "typeorm";
import { ExpertiseFieldUser } from "./entity/expertise-field-user";
import { ExpertiseField } from "./entity/expertise-field";
import { getCreateConnection } from "./getCreateConnection";

require("dotenv").config();

async function main(): Promise<Connection> {
  const connection = await getCreateConnection();
  await getExpertiseField(connection);
  return connection;
}

// マッピングはできたけどグルーピングができないと思っていたが、
// userIdをpkにすると検索結果が減る。たぶん一番上だけ取得
// だけどleftJoinAndMapOneをleftJoinAndMapManyに帰るとちゃんとマッピングできた
async function getExpertiseField(connection: Connection) {
  const ExpertiseFieldUsers = await connection.manager
    .createQueryBuilder(ExpertiseFieldUser, "u")
    .leftJoinAndMapMany(
      "u.expertiseFields",
      ExpertiseField,
      "e",
      "u.expertiseFieldId=e.id"
    )
    .getMany();
  //  console.log(ExpertiseFieldUsers);

  ExpertiseFieldUsers.forEach(e => {
    console.log(e);
  });

  //console.log(group);
}

async function getExpertiseField1(connection: Connection) {
  const repo = await getRepository(ExpertiseFieldUser)
    .createQueryBuilder("expertiseFieldUser")
    .leftJoinAndSelect(
      "expertise_fields",
      "expertiseField",
      "expertiseField.Id = expertiseFieldUser.expertise_field_Id"
    )
    .getMany();

  console.log(repo);
}

main().then(connection => {
  console.log("end!");
  connection.close();
});
