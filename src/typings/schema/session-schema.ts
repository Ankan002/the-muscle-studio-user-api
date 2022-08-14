import { ObjectId } from "mongoose";

export interface SessionSchema {
	userId: ObjectId;
	entryTime: string;
	exitTime?: string;
	date: string;
}
