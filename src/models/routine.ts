import mongoose, { Schema } from "mongoose";
import { RoutineSchema } from "typings/schema";

const routineSchema = new Schema<RoutineSchema>(
	{
		name: {
			type: String,
			minlength: 3,
			maxlength: 30,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Routine = mongoose.model<RoutineSchema>("Routine", routineSchema);
