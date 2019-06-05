import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => console.log("user index"));
userRouter.get("/edit", (req, res) => console.log("user edit"));
userRouter.get("/password", (req, res) => console.log("user password"));
