import mongoose, { Schema } from "mongoose";
import { InvoiceSchema } from "typings/schema";

const invoiceSchema = new Schema<InvoiceSchema>(
	{
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		particulars: {
			type: [Schema.Types.ObjectId],
			required: true,
			ref: "InvoiceItem",
		},
		gst: {
			type: Number,
			required: true,
			min: 1,
			max: 100,
		},
		date: {
			type: String,
			required: true,
			minlength: 10,
			maxlength: 10,
		},
		razorpayOrderId: {
			type: String,
			required: true,
		},
		razorpayPaymentId: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Invoice = mongoose.model<InvoiceSchema>("Invoice", invoiceSchema);
