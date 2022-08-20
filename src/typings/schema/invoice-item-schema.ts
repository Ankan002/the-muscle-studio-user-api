import { ObjectId } from "mongoose";
import { PlanDuration } from "typings/general";

export interface InvoiceItemSchema {
	plan: ObjectId;
	duration: PlanDuration;
}
