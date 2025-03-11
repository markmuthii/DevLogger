import express from "express";
import "dotenv/config";

import { getHome } from "./controllers/home.js";
import { studentsRouter } from "./routes/students.js";
import { devicesRouter } from "./routes/devices.js";
import { logsRouter } from "./routes/logs.js";
import { usersRouter } from "./routes/users.js";
import { connectDB } from "./db/config.js";
import { authRouter } from "./routes/auth.js";

const app = express();

connectDB();

app.use(express.json());

app.get("/", getHome);

app.use("/students", studentsRouter);

app.use("/devices", devicesRouter);

app.use("/logs", logsRouter);

app.use("/users", usersRouter);

app.use("/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
