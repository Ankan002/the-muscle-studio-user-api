import express, { Request, Response } from "express";
import cors from "cors";
import expressFileUpload from "express-fileupload";
import { ApolloServer } from "apollo-server-express";
import { welcomeTypeDefs } from "graphql/typeDefs";
import { welcomeResolver } from "graphql/resolvers";

const startServer = async () => {
	const app = express();
	const PORT = process.env.PORT;

	app.use(cors());
	app.use(express.json());
	app.use(
		expressFileUpload({
			useTempFiles: true,
		})
	);

	const apolloServer = new ApolloServer({
		typeDefs: [welcomeTypeDefs],
		resolvers: [welcomeResolver],
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	app.get("/", (req: Request, res: Response) => {
		res.status(200).json({
			success: true,
			message: "Welcome to gym management main API",
		});
	});

	app.listen(PORT, () => console.log(`App is running at Port: ${PORT}`));
};

export default startServer;
