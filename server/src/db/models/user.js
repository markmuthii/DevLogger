import { model, Schema } from "mongoose";

const usersSchema = new Schema(
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
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

usersSchema.virtual("logs", {
  ref: "log",
  localField: "_id", // primary key of current schema
  foreignField: "user", // foreign key in the referenced schema
});

usersSchema.set("toJSON", { virtuals: true });
usersSchema.set("toObject", { virtuals: true });

const User = model("user", usersSchema);

export { User };
