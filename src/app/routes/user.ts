import express from "express";

const userRoutes = express.Router();
const userModel = require('../models/user');

// get all users
userRoutes.use("/", (req, res, next) => {

  userModel.find().then(
    (user: any) => {
      res.status(200).json(user);
    }
  ).catch(
    (error: any) => {
      res.status(400).json({
        error: error
      });
    }
    );
})

module.exports = userRoutes;
