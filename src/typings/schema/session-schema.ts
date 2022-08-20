import { ObjectId } from "mongoose";

export interface SessionSchema {
	user: ObjectId;
	entryTime: string;
	exitTime?: string;
	date: string;
}
