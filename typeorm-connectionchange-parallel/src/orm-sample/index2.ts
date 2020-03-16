import "reflect-metadata";
import { createConnection } from "typeorm";
import { ClientEntity } from "../entity/client.entity";
import { getRepository } from "typeorm";

async function main() {
  const connection = await createConnection();
  const clientRepository = getRepository(ClientEntity);
  const client = await clientRepository.findOne({
    select: ["dbConfName"],
    where: { clientKey: "demo" }
  });
  console.log(client);
}

main();
