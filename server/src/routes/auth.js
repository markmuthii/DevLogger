import { Router } from "express";

import { loginUser, logoutUser, registerUser } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.delete("/logout", logoutUser);

export { authRouter };
