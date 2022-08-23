import express, { Request, Response } from "express";
import cors from "cors";
import expressFileUpload from "express-fileupload";
import { ApolloServer } from "apollo-server-express";
import { welcomeTypeDefs } from "graphql/typeDefs";
import { welcomeResolver } from "graphql/resolvers";
import cookieParser from "cookie-parser";

import { welcomeRouter } from "routes/welcome";
import { origins } from "constants/cors-origins";
import { morganConfig } from "middlewares/morgan-config";
import { logger } from "utils/logger";
import { connectToDB } from "config/connect-db";
import { authRouter } from "routes/auth";

const startServer = async () => {
	const app = express();
	const PORT = process.env["PORT"];

	app.use(
		cors({
			credentials: true,
			origin: origins,
		})
	);
	app.use(express.json());
	app.use(cookieParser());
	app.use(morganConfig);
	app.use(
		expressFileUpload({
			useTempFiles: true,
		})
	);

	connectToDB();

	const apolloServer = new ApolloServer({
		typeDefs: [welcomeTypeDefs],
		resolvers: [welcomeResolver],
		context: (context) => {
			const authToken = context.req.cookies?.authToken;
			return {
				authToken,
			};
		},
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	app.get("/", (req: Request, res: Response) => {
		logger.debug(req.user);
		res.status(200).json({
			success: true,
			message: "Welcome to gym management shop API",
		});
	});

	app.use("/api", welcomeRouter);
	app.use("/api/auth", authRouter);

	app.listen(PORT, () => logger.info(`App is running at Port: ${PORT}`));
};

export default startServer;
