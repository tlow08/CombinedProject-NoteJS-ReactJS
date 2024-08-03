import {Router} from "express";
import { login, register } from "../controllers/authController.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { authSchema } from "../validSchema/authSchema.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { showProfile } from "../controllers/userController.js";

const authRouter = Router();

authRouter.post("/register",validBodyRequest(authSchema), register);
authRouter.post("/login",validBodyRequest(authSchema), login);

authRouter.use("/", checkAuth);
authRouter.get("/me", showProfile);

export default authRouter;