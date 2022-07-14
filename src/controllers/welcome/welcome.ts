import { Controller } from "typings/express";

interface ResponseData {
	message: string;
}

// interface ParamsType {
// 	name: string;
// }

// interface RequestBody {
// 	class: string;
// }

// interface RequestQuery {
// 	title: string;
// }

export const welcome: Controller<void, ResponseData> = async (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: `Welcome`,
		},
	});
};
