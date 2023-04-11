import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import config from "config"
import { Key } from "./entity/Key"
interface IDataSource {
    type: "postgres"
    host: string
    port: number
    username: string
    password: string
    database: string
}

const dbConfig: IDataSource = config.get("databaseConfig");

export const AppDataSource = new DataSource({
    ...dbConfig,
    synchronize: true,
    logging: false,
    entities: [
        User,
        Key
    ],
    migrations: ["migration/*.ts"],
    subscribers: [],
    migrationsTableName: "custom_migration_table",
})
