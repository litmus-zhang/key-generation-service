import { app } from "./src";
import config from "config"


const port = config.get("port");

app.listen(port)
console.log(`Server started at http://localhost:${port} 💃💃💃`)