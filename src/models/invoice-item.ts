import mongoose, { Schema } from "mongoose";
import { InvoiceItemSchema } from "typings/schema";

enum PlanDuration {
	monthly = "monthly",
	yearly = "yearly",
}

const invoiceItemSchema = new Schema<InvoiceItemSchema>(
	{
		planId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Plan",
		},
		duration: {
			type: String,
			enum: PlanDuration,
			required: true,
		},
	},
	{ timestamps: true }
);

export const InvoiceItem = mongoose.model<InvoiceItemSchema>("InvoiceItem", invoiceItemSchema);
