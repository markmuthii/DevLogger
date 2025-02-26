import { model, Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    student: {
      // Ref to the Student model
      type: Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Device = model("device", deviceSchema);

// There might be some logic

export { Device };
