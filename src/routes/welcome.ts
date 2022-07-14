import { Router } from "express";
import { welcome } from "controllers/welcome";

export const welcomeRouter = Router();

welcomeRouter.get("/welcome/:name", welcome);
