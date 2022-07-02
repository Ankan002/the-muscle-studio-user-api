interface ArgsProps {
	payload: {
		name: string;
	};
}

//Context and Info can also be used as parameters
export const welcome = async (parent: void, args: ArgsProps) => {
	const { payload } = args;

	return {
		success: true,
		message: `${payload.name}, Welcome to the GraphQL section`,
	};
};
