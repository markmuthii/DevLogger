import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import { getHome } from "./controllers/home.js";
import { studentsRouter } from "./routes/students.js";
import { devicesRouter } from "./routes/devices.js";
import { logsRouter } from "./routes/logs.js";
import { usersRouter } from "./routes/users.js";
import { connectDB } from "./db/config.js";
import { authRouter } from "./routes/auth.js";
import { authenticate } from "./middleware/auth.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.get("/", getHome);

app.use("/auth", authRouter);

app.use(authenticate);

app.use("/students", studentsRouter);

app.use("/devices", devicesRouter);

app.use("/logs", logsRouter);

app.use("/users", usersRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
