import { gql } from "apollo-server-express";

export const welcomeTypeDefs = gql`
	input WelcomeName {
		name: String!
	}

	type WelcomeResponse {
		success: Boolean!
		message: String!
	}

	type Query {
		welcome(payload: WelcomeName!): WelcomeResponse!
	}
`;
