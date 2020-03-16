import { Connection, createConnection } from "typeorm";

export async function getCreateConnection(): Promise<Connection> {
  return await createConnection({
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
}
