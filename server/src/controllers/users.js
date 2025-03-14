import { User } from "../db/models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("logs");

    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = (req, res) => {
  res.json({
    message: "PUT /users",
  });
};

export const deleteUsers = (req, res) => {
  res.json({
    message: "DELETE /users",
  });
};
