import { config } from "dotenv";
import startServer from "./app";

config();
startServer().catch((e) => console.log(e));
