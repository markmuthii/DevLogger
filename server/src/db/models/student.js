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

studentSchema.virtual("devices", {
  ref: "device",
  localField: "_id", // primary key of current schema
  foreignField: "student", // foreign key in the referenced schema
});

studentSchema.set("toJSON", { virtuals: true });
studentSchema.set("toObject", { virtuals: true });

const Student = model("student", studentSchema);

export { Student };
