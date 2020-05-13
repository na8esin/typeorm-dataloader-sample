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