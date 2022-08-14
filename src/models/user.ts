import mongoose, { Schema } from "mongoose";
import { UserSchema } from "typings/schema";

enum Role {
	user = "user",
	member = "member",
}

const userSchema = new Schema<UserSchema>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 60,
		},
		providerId: {
			type: String,
			required: true,
			unique: true,
			minlength: 20,
			maxlength: 22,
		},
		role: {
			type: String,
			enum: Role,
			default: Role.user,
		},
		memberTill: {
			type: String,
			required: false,
			minlength: 10,
			maxlength: 10,
		},
		password: {
			type: String,
			required: false,
		},
		planId: {
			type: Schema.Types.ObjectId,
			required: false,
			ref: "Plan",
		},
		routineId: {
			type: Schema.Types.ObjectId,
			required: false,
			ref: "Routine",
		},
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model<UserSchema>("User", userSchema);
