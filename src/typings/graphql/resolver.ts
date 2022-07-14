import { ExpressContext } from "apollo-server-express";
import { TypeInfo } from "graphql";
import { APIResponse } from "typings/general";

interface GraphQLContext extends ExpressContext {
	authToken: string;
}

// TODO: define status code types and add it to API Response

/**
 * This is the function type for the GraphQL resolver.
 *
 * This type accepts two generic arguments:
 *
 * i. Args -> args type that this function accepts.
 *
 * ii. Data -> the type of data object that needs to be returned.
 */
export type Resolver<Args = void, R = void> = (
	parent: void,
	args: Args,
	context: GraphQLContext,
	info: TypeInfo
) => Promise<APIResponse<R>>;
