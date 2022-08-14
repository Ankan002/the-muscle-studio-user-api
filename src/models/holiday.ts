import mongoose, { Schema } from "mongoose";
import { HolidaySchema } from "typings/schema";

enum HolidayType {
	regular = "regular",
	occassional = "occassional",
}

enum Weekdays {
	monday = "monday",
	tuesday = "tuesday",
	wednesday = "wednesday",
	thursday = "thursday",
	friday = "friday",
	saturday = "saturday",
	sunday = "sunday",
}

const holidaySchema = new Schema<HolidaySchema>(
	{
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 40,
		},
		type: {
			type: String,
			enum: HolidayType,
			required: true,
		},
		day: {
			type: String,
			enum: Weekdays,
			required: false,
		},
		date: {
			type: String,
			required: false,
			minlength: 10,
			maxlength: 10,
		},
		description: {
			type: String,
			required: false,
			minlength: 20,
			maxlength: 350,
		},
	},
	{ timestamps: true }
);

export const Holiday = mongoose.model<HolidaySchema>("Holiday", holidaySchema);
