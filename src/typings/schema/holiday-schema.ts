import { Weekdays } from "typings/general";

export interface HolidaySchema {
	type: "regular" | "occassional";
	day?: Weekdays;
	date?: string;
	name: string;
	description?: string;
}
