import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressFileUpload from "express-fileupload";
import { ApolloServer } from "apollo-server-express";
import { welcomeTypeDefs } from "graphql/typeDefs";
import { welcomeResolver } from "graphql/resolvers";

const startServer = async () => {
	const app = express();
	const PORT = process.env.PORT;

	app.use(
		cors({
			origin: "*",
			credentials: true,
		})
	);
	app.use(cookieParser());
	app.use(express.json());
	app.use(
		expressFileUpload({
			useTempFiles: true,
		})
	);

	const apolloServer = new ApolloServer({
		typeDefs: [welcomeTypeDefs],
		resolvers: [welcomeResolver],
		context: (context) => {
			const authToken = context?.req?.cookies?.authToken;
			return {
				authToken,
			};
		},
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	app.get("/", (req: Request, res: Response) => {
		res.status(200).json({
			success: true,
			message: "Welcome to The Muscle Studio user API",
		});
	});

	app.listen(PORT, () => console.log(`App is running at Port: ${PORT}`));
};

export default startServer;
