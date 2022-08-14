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

const dailySchedule = new Schema<DailyScheduleSchema>({
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
	routineId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "Routine",
	},
	exercises: {
		type: [Schema.Types.ObjectId],
		required: true,
		ref: "Exercise",
	},
});

export const DailySchema = mongoose.model<DailyScheduleSchema>("DailySchedule", dailySchedule);
