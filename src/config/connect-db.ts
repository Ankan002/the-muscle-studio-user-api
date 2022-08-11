import mongoose from "mongoose";

export const connectToDB = () => {
	mongoose
		.connect(process.env["DB_URI"] ?? "")
		.then(() => console.log("Connected to DB"))
		.catch((e) => console.log(e));
};
