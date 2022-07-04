import { GraphQLCookieContext } from "typings/graphql-cookie-context";

interface ArgsProps {
	payload: {
		name: string;
	};
}

//Context and Info can also be used as parameters
export const welcome = async (parent: void, args: ArgsProps, context: GraphQLCookieContext) => {
	const { payload } = args;

	const { authToken } = context;

	console.log(authToken);

	return {
		success: true,
		message: `${payload.name}, Welcome to the GraphQL section`,
	};
};
