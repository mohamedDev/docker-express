import * as express from "express";
import { UsersController } from "./user.controller";

let userRoutes = express.Router();
let usersController = new UsersController();

userRoutes
  /**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
  .get("/", usersController.index)
  .get("/:id", usersController.show)
  .post("/", usersController.create)
  .post("/photo", usersController.uploadPhoto)

  .put("/:id", usersController.update)
  .delete("/:id", usersController.delete)

export default userRoutes;
