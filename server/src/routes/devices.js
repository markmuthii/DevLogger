import { Router } from "express";

import {
  createDevices,
  deleteDevices,
  getDevices,
  updateDevice,
} from "../controllers/devices.js";

const devicesRouter = Router();

devicesRouter
  .route("/")
  .post(createDevices)
  .get(getDevices)
  .put(updateDevice)
  .delete(deleteDevices);

export { devicesRouter };
