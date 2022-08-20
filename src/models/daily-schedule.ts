import mongoose, { Schema } from "mongoose";
import { DailyScheduleSchema } from "typings/schema";

enum Weekdays {
	monday = "monday",
	tuesday = "tuesday",
	wednesday = "wednesday",
	thursday = "thursday",
	friday = "friday",
	saturday = "saturday",
	sunday = "sunday",
}

const dailyScheduleSchema = new Schema<DailyScheduleSchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 40,
		},
		day: {
			type: String,
			required: true,
			enum: Weekdays,
		},
		routine: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Routine",
		},
		exercises: {
			type: [Schema.Types.ObjectId],
			required: true,
			ref: "Exercise",
		},
	},
	{ timestamps: true }
);

export const DailySchema = mongoose.model<DailyScheduleSchema>("DailySchedule", dailyScheduleSchema);
