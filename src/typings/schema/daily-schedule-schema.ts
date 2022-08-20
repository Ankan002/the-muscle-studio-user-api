import { ObjectId } from "mongoose";
import { Weekdays } from "typings/general";

export interface DailyScheduleSchema {
	name: string;
	day: Weekdays;
	routine: ObjectId;
	exercises: Array<ObjectId>;
}
