import mongoose, { Schema } from "mongoose";
import { AdminSchema } from "typings/schema";

enum Role {
	admin = "admin",
	trainer = "trainer",
}

const adminSchema = new Schema<AdminSchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		emailConfirmed: {
			type: Boolean,
			required: false,
			default: false,
		},
		role: {
			type: String,
			enum: Role,
			default: Role.trainer,
			required: false,
		},
	},
	{ timestamps: true }
);

export const Admin = mongoose.model<AdminSchema>("Admin", adminSchema);
