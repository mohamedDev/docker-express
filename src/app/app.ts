import express = require('express');
const app = express();

let test = "";

app.get('/', (req, res, next) => {
    test = "red";
    next();
});

app.get('/', (req, res, next) => {
    test += "moon";
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Votre requette  a bien été reçue !' + test });
});

module.exports = app;
