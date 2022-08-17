import { ObjectId } from "mongoose";

export interface InvoiceSchema {
	price: number;
	userId: ObjectId;
	particulars: Array<ObjectId>;
	gst: number;
	date: string;
}
