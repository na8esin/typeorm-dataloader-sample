import "reflect-metadata";
import { createConnection } from "typeorm";
import { ClientEntity } from "../entity/client.entity";
import { getRepository } from "typeorm";

createConnection()
  .then(async connection => {
    const clientRepository = connection.getRepository(ClientEntity);
    const client = await clientRepository.findOne({
      select: ["dbConfName"],
      where: { clientKey: "demo" }
    });
    console.log(client);
  })
  .catch(error => console.log(error));
