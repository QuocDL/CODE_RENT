import { Router } from "express";
import { loginApi, register } from "../controllers/user";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", loginApi);

export default userRouter;
