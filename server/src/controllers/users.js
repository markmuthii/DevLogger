import { User } from "../db/models/user.js";

export const createUsers = async (req, res) => {
  const { name, email, username, phone, password } = req.body;

  try {
    if (!name || !email || !username || !phone || !password) {
      throw new Error("All fields are required");
    }

    const newUser = await User.create({
      name,
      email,
      username,
      phone,
      password,
    });

    res.json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

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
