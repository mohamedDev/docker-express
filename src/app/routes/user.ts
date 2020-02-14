import express = require('express');
const router = express.Router();

const User = require('../models/user');

router.use('/', (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
