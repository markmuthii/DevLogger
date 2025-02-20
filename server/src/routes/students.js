import { Router } from "express";

import {
  createStudents,
  deleteStudents,
  getStudents,
  updateStudent,
} from "../controllers/students.js";

const studentsRouter = Router();

studentsRouter
  .route("/")
  .post(createStudents)
  .get(getStudents)
  .put(updateStudent)
  .delete(deleteStudents);

export { studentsRouter };
