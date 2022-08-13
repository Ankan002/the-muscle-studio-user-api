import mongoose, { Schema } from "mongoose";
import { PlanSchema } from "typings/schema";

const planSchema = new Schema<PlanSchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 30,
		},
		benefits: {
			type: [String],
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		yearlyDiscount: {
			type: Number,
			required: true,
			min: 0,
			max: 100,
		},
	},
	{ timestamps: true }
);

export const Plan = mongoose.model<PlanSchema>("Plan", planSchema);
