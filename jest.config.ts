// This is jest config
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
