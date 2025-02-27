import { model, Schema } from "mongoose";

const logsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    device: {
      type: Schema.Types.ObjectId,
      ref: "device",
      required: true,
    },
    status: {
      type: String,
      default: "active", // this will be inactive when the device is logged out of the premises
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = model("log", logsSchema);

export { Log };
