import express from "express";
import {edit, reomove, logout, see } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", reomove);
userRouter.get(":id", see);

export default userRouter;