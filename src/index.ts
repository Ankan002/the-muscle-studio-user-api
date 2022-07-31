import { config } from "dotenv";
import { logger } from "utils";
import startServer from "./app";

config();
startServer().catch((e) => logger.error(e));
