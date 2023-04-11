import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entity/User"
import { config } from "config"
import { Key } from "./entity/Key"

interface databaseConfigInterface {
    type: "postgres" | "cockroachdb"
    host: string
    port: number
    username: string
    password: string
    database: string
}
const dbConfig: databaseConfigInterface = config.get<"databaseConfig">();

export const AppDataSource = new DataSource({
    ...dbConfig,
    synchronize: false,
    logging: false,
    entities: [User, Key],
    migrations: [],
    subscribers: [],
})
