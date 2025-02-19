import express from "express";
import "dotenv/config";
import { getHome } from "./controllers/home.js";
import {
  createStudents,
  deleteStudents,
  getStudents,
  updateStudent,
} from "./controllers/students.js";

const app = express();

app.get("/", getHome);

// Create a Student Record
app.post("/students", createStudents);

// Read student records
app.get("/students", getStudents);

// Update student records
app.put("/students", updateStudent);

// Delete student records
app.delete("/students", deleteStudents);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
