import { config } from "dotenv";
import { logger } from "utils/logger";
import startServer from "./app";

config();
startServer().catch((e) => logger.error(e));
