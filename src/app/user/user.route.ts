import * as express from "express";

import { UsersController } from "./user.controller";

let userRoutes = express.Router();
let usersController = new UsersController();

userRoutes
  .get("/", usersController.index)
  .get("/:id", usersController.show)
  .post("/", usersController.create)
  .put("/:id", usersController.update)
  .delete("/:id", usersController.delete)

export default userRoutes;
