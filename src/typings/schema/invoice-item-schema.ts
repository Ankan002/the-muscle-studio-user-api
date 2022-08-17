import { ObjectId } from "mongoose";
import { PlanDuration } from "typings/general";

export interface InvoiceItemSchema {
	planId: ObjectId;
	duration: PlanDuration;
}
