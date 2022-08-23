import { login, LoginController } from "controllers/auth";
import { Router } from "express";
import { body } from "express-validator";

const loginValidator = [
	body("profileJwtToken").isString().isLength({ min: 1 }).withMessage("Please provide a valid profile jwt token"),
] as unknown as LoginController;

export const authRouter = Router();

authRouter.route("/login").post(loginValidator, login);
