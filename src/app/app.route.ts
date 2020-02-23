import * as express from "express";
import userRoutes from "./user/user.route";

export default class AppRoutes {

  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.redirect();
  }

  private redirect(): void {
    this.app.use("/api/users", userRoutes);
  }
}
