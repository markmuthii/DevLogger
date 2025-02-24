import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const usersRouter = Router();

usersRouter
  .route("/")
  .post(createUsers)
  .get(getUsers)
  .put(updateUser)
  .delete(deleteUsers);

export { usersRouter };
