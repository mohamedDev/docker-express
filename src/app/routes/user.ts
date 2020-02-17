import express = require("express");
const router = express.Router();

const User = require("../models/user");

// get user by ID
router.get("/:id", (req, res, next) => {
  User.findOne({
    _id: req.params.id
  })
    .then(user => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch(error => res.status(404).json({ error: error }));
});

// get all users
router.use("/", (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
