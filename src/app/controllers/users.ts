const userModel = require('../models/user');

exports.getAllUsers = (req, res, next) => {
  userModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error: error }))
};

