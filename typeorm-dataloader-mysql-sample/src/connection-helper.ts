import { createConnection } from "typeorm";

export function connectionHelper() {
    return createConnection(
        process.env.NODE_ENV === 'mysql' ?
            {
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "test",
                password: "test",
                database: "test"
            }
            : {
                type: "sqlite",
                database: "test.sqlite",
                "synchronize": true,
                "logging": true,
                "entities": [
                    "src/entity/**/*.ts"
                ],
            }
    );
}