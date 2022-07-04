import { ExpressContext } from "apollo-server-express";

export interface GraphQLCookieContext extends ExpressContext {
	authToken: string;
}
