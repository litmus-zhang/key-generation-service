import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { config } from "config"

export const app = express()

AppDataSource.initialize().then(async () => {

    // create express app
    app.use(bodyParser.json())

    // register express routes from defined application routes


    // setup express app here
    // ...

    // start express server
    const port = config.get<"port">();
    app.listen(port)

    // insert new users for test

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
