import mongoose, { Schema } from "mongoose";
import { AnnouncementSchema } from "typings/schema";

const announcementSchema = new Schema<AnnouncementSchema>({
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 60,
	},
	description: {
		type: String,
		required: true,
		minlength: 40,
		maxlength: 250,
	},
	photo: {
		type: String,
		required: true,
	},
});

export const Announcement = mongoose.model<AnnouncementSchema>("Announcement", announcementSchema);
