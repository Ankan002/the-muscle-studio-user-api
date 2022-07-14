import { Express, Request } from "express";

declare global {
	namespace Express {
		interface Request {
			user: {
				id: string;
				type: "admin" | "trainer" | "member" | "user";
			};
		}
	}
}
