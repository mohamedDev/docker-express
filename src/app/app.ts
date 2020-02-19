// app vendors
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";
import { Database } from "./database";

class Main {

  constructor() {
    let database = new Database();
    database.connect();
  }

  initApp() {
    let app = express();

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
    app.use(bodyParser.json());
    app = express();
    return app;
  }

}

let main = new Main();

const app = main.initApp();

/*
* users routes
*/
app.use("/api/users", userRoutes);

module.exports = app;
