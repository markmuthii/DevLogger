import { Router } from "express";

import {
  createStudents,
  deleteStudents,
  getSingleStudent,
  getStudents,
  updateStudent,
} from "../controllers/students.js";

const studentsRouter = Router();

studentsRouter.route("/").post(createStudents).get(getStudents);

studentsRouter
  .route("/:studentID")
  .put(updateStudent)
  .delete(deleteStudents)
  .get(getSingleStudent);

export { studentsRouter };
