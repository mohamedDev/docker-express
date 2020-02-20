// app vendors
// https://github.com/madeindjs/locadb/blob/master/lib/app.ts
import express from "express";
import * as bodyParser from "body-parser";

import Database from "./database";
import appRoutes from "./app.route";

class App {

  public app: express.Application;
  public routes: appRoutes;

  constructor() {
    this.app = express();
    this.config();
    this.routes = new appRoutes(this.app);
    let database = new Database();
  }

  private config(): void {
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );
      next();
    });

    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
