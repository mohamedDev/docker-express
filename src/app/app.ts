import express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./db');
const userRoutes = require('./routes/user');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

module.exports = app;
