import { ObjectId } from "mongoose";

export interface UserSchema {
	email: string;
	name: string;
	providerId: string;
	role: "user" | "member";
	memberTill?: string;
	password?: string;
	planId?: ObjectId;
	routineId?: ObjectId;
}
