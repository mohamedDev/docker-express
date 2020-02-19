
import express from "express";
import mongoose from "mongoose";

export class Database {

  private urlCxn: string = "mongodb://mongo:27017/med";
  private optionCnx: {} = { useNewUrlParser: true, useUnifiedTopology: true };

  constructor() { }

  connect() {
    mongoose.connect(this.urlCxn, this.optionCnx)
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch(() => console.log('Connexion à MongoDB échouée !'));
  }
}
