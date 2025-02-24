import { model, Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String, // 0712834944, +254783489325
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = model("student", studentSchema);

export { Student };
