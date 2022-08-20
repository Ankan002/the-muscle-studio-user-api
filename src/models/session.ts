import mongoose, { Schema } from "mongoose";
import { SessionSchema } from "typings/schema";

const sessionSchema = new Schema<SessionSchema>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		entryTime: {
			type: String,
			required: true,
		},
		exitTime: {
			type: String,
			required: false,
		},
		date: {
			type: String,
			required: true,
			minlength: 10,
			maxlength: 10,
		},
	},
	{ timestamps: true }
);

export const Session = mongoose.model<SessionSchema>("Session", sessionSchema);
