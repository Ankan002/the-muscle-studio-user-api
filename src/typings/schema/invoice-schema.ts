import { ObjectId } from "mongoose";

export interface InvoiceSchema {
	price: number;
	user: ObjectId;
	particulars: Array<ObjectId>;
	gst: number;
	date: string;
	razorpayPaymentId: string;
	razorpayOrderId: string;
}
