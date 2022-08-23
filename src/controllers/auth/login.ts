import { logger } from "utils/logger";
import jwtDecode, { InvalidTokenError } from "jwt-decode";
import { validationResult } from "express-validator";
import { Request } from "express";
import { User } from "models/user";
import jwt from "jsonwebtoken";
import { Controller } from "typings/express";

interface RequestBody {
	profileJwtToken: string;
}

interface ResponseBody {
	message: string;
}

interface DecodedProfileData {
	iss: string;
	nbf: number;
	aud: string;
	sub: string;
	email: string;
	email_verified: boolean;
	azp: string;
	name: string;
	picture: string;
	given_name: string;
	family_name: string;
	iat: number;
	exp: number;
	jti: string;
}

export type LoginController = Controller<void, ResponseBody, RequestBody>;

export const login: LoginController = async (req, res) => {
	const errors = validationResult(req as unknown as Request);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			error: errors.array().length > 1 ? errors.array()[1]?.msg : errors.array()[0]?.msg,
			code: 400,
		});
	}

	const { profileJwtToken } = req.body;

	console.log();

	try {
		const decodedProfileData: DecodedProfileData = await jwtDecode(profileJwtToken);

		if (
			!decodedProfileData.sub ||
			!decodedProfileData.name ||
			!decodedProfileData.email ||
			!decodedProfileData.picture
		) {
			return res.status(400).json({
				success: false,
				error: "Inavlid profile jwt. Please verify and retry.",
				code: 400,
			});
		}

		const retrievedUser = await User.findOne({
			providerId: decodedProfileData.sub,
		});

		if (retrievedUser) {
			const user = {
				id: retrievedUser.id,
				role: retrievedUser.role,
			};

			const jwtToken = jwt.sign(user, process.env["SECRET"] ?? "");

			res.cookie("authToken", jwtToken, {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
				httpOnly: true,
			});

			return res.status(200).json({
				success: true,
				data: {
					message: "Login Successful",
				},
			});
		}

		if (!decodedProfileData.email_verified) {
			return res.status(200).json({
				success: false,
				error: "Email not verified!!",
				code: 400,
			});
		}

		const newUser = await User.create({
			email: decodedProfileData.email,
			name: decodedProfileData.name,
			providerId: decodedProfileData.sub,
			picture: decodedProfileData.picture,
			role: "user",
		});

		const user = {
			id: newUser.id,
			role: newUser.role,
		};

		const jwtToken = jwt.sign(user, process.env["SECRET"] ?? "", {
			expiresIn: 1000 * 60 * 60 * 24 * 90 + 5000,
		});

		res.cookie("authToken", jwtToken, {
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
			httpOnly: true,
		});

		return res.status(200).json({
			success: true,
			data: {
				message: "Login Successful",
			},
		});
	} catch (error) {
		logger.error(error);

		if (error instanceof InvalidTokenError) {
			return res.status(400).json({
				success: false,
				error: "Invalid token",
				code: 400,
			});
		}

		if (error instanceof Error) {
			return res.status(400).json({
				success: false,
				error: error.message,
				code: 400,
			});
		}

		return res.status(500).json({
			success: false,
			error: "Internal Server Error",
			code: 500,
		});
	}
};
