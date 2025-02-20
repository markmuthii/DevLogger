import express from "express";
import "dotenv/config";
import { getHome } from "./controllers/home.js";
import {
  createDevices,
  deleteDevices,
  getDevices,
  updateDevice,
} from "./controllers/devices.js";
import {
  createLogs,
  deleteLogs,
  getLogs,
  updateLog,
} from "./controllers/logs.js";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUser,
} from "./controllers/users.js";
import { studentsRouter } from "./routes/students.js";

const app = express();

app.get("/", getHome);

// Create a Student Record
// app.post("/students/rere", createStudents);

// Read student records
// app.get("/students", getStudents);

// Update student records
// app.put("/students", updateStudent);

// Delete student records
// app.delete("/students", deleteStudents);

app.use("/students", studentsRouter);

// Create a Device Record
// app.post("/devices", createDevices);

// Read device records
// app.get("/devices", getDevices);

// Update device records
// app.put("/devices", updateDevice);

// Delete device records
// app.delete("/devices", deleteDevices);

app
  .route("/devices")
  .post(createDevices)
  .get(getDevices)
  .put(updateDevice)
  .delete(deleteDevices);

// Create a Log Record
// app.post("/logs", createLogs);

// Read log records
// app.get("/logs", getLogs);

// Update log records
// app.put("/logs", updateLog);

// Delete log records
// app.delete("/logs", deleteLogs);

app
  .route("/logs")
  .post(createLogs)
  .get(getLogs)
  .put(updateLog)
  .delete(deleteLogs);

// Create a User Record
// app.post("/users", createUsers);

// Read user records
// app.get("/users", getUsers);

// Update user records
// app.put("/users", updateUser);

// Delete user records
// app.delete("/users", deleteUsers);

app
  .route("/users")
  .post(createUsers)
  .get(getUsers)
  .put(updateUser)
  .delete(deleteUsers);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
