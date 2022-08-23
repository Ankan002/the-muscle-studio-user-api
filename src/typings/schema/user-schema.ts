import { ObjectId } from "mongoose";

export interface UserSchema {
	email: string;
	name: string;
	providerId: string;
	role: "user" | "member";
	picture: string;
	memberTill?: string;
	password?: string;
	plan?: ObjectId;
	routine?: ObjectId;
}
