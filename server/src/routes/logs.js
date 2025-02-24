import { Router } from "express";
import {
  createLogs,
  deleteLogs,
  getLogs,
  updateLog,
} from "../controllers/logs.js";

const logsRouter = Router();

logsRouter
  .route("/")
  .post(createLogs)
  .get(getLogs)
  .put(updateLog)
  .delete(deleteLogs);

export { logsRouter };
