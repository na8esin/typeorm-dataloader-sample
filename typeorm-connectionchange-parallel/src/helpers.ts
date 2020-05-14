import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { ConnectionManager, ConnectionOptions } from "typeorm";

export async function createQueryRunner(
    connectionManager: ConnectionManager,
    config: ConnectionOptions
) {
    const connection = await connectionManager
        .create(config)
        .connect();
    const defaulQueryRunner = connection.createQueryRunner();
    await defaulQueryRunner.connect();
    return defaulQueryRunner;
}

export function getConfig(environment: 'test' | 'dev') {
    return dotenv.parse(fs.readFileSync(`env/${environment}.env`));
}

export function getDbConfig(
    env: 'test' | 'dev',
    databaseName: string): ConnectionOptions {
    const config = getConfig(env);
    const dbConfig: ConnectionOptions = {
        type: "mysql",
        host: config['DATABASE_HOST'],
        port: parseInt(config['DATABASE_PORT']),
        username: config['DATABASE_USER'],
        password: config['DATABASE_PASSWORD'],
        entities: ["src/entity/**/*.ts"],
        synchronize: false,
        logging: true,
        database: databaseName,
        name: databaseName,
    };
    return dbConfig;
}