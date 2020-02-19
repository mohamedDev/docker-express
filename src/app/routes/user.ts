import express from "express";
import { Router } from "express";

import userModel from "../models/user";

const userRoutes: Router = Router();

// get all users
userRoutes.use("/", (req, res, next) => {
  userModel
    .find()
    .then((user: any) => {
      res.status(200).json(user);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error
      });
    });
});

export default userRoutes;
