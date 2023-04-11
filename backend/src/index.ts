import express from "express"
import { AppDataSource } from "./data-source"
import userRouter from "./router/userRouter"
import keyRouter from "./router/keyRouter"
export const app = express()

AppDataSource.initialize().then(async () => {

    // create express app
    app.use(express.json())
    app.use("/api/v1/users", userRouter)
    app.use("/api/v1/keys", keyRouter)

}).catch(error => console.log(error))
