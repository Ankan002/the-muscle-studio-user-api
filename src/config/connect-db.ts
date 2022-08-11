import mongoose from "mongoose";
import { logger } from "utils/logger";

export const connectToDB = () => {
	mongoose
		.connect(process.env["DB_URI"] ?? "")
		.then(() => logger.info("Connected to DB"))
		.catch((e) => logger.error(e));
};
