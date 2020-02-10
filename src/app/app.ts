import express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();

mongoose.connect('mongodb://mongo:27017/med', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/*
* Cross Origin Resource Sharing
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/*
* Get JSON object from request Params
*/
app.use(bodyParser.json());

app.use('/users', (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});

app.get("/", (req, res) => {
  res.json({ message: "Votre requette  a bien été reçue !" });
});

module.exports = app;
