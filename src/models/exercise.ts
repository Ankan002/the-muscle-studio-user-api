import mongoose, { Schema } from "mongoose";
import { ExerciseSchema } from "typings/schema";

const exerciseSchema = new Schema<ExerciseSchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 45,
		},
		reps: {
			type: Number,
			required: false,
			min: 1,
		},
		sets: {
			type: Number,
			required: false,
			min: 1,
		},
		time: {
			type: Number,
			required: false,
			min: 1,
		},
		tags: {
			type: [String],
			required: false,
			default: [],
		},
	},
	{ timestamps: true }
);

export const Exercise = mongoose.model<ExerciseSchema>("Exercise", exerciseSchema);
