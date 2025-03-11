import { Router } from "express";
import { deleteUsers, getUsers, updateUser } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.route("/").get(getUsers).put(updateUser).delete(deleteUsers);

export { usersRouter };
