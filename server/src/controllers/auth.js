import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../db/models/user.js";

export const registerUser = async (req, res) => {
  const { name, email, username, phone, password } = req.body;

  try {
    if (!name || !email || !username || !phone || !password) {
      throw new Error("All fields are required");
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      username,
      phone,
      password: hashedPassword,
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

export const loginUser = async (req, res) => {
  // Get the data (username, password) from the request
  const { username, password } = req.body;

  try {
    // Validate that data
    if (!username || !password) {
      throw new Error("Both fields are required");
    }

    // If valid, Check whether there is a user with that username
    const user = await User.findOne({ username });

    if (!user) throw new Error("Invalid credentials - username");

    // If there is a user with that username, check whether the password is valid
    const passwordsMatch = await compare(password, user.password);

    if (!passwordsMatch) throw new Error("Invalid credentials - password");

    // If the password is valid, create a JWT using the user data
    const token = jwt.sign(
      {
        user: {
          _id: user._id,
        },
      },
      process.env.JWT_SECRET
    );

    console.log({ token });

    // Set the JWT in the cookies
    res.cookie("devlogger_auth", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false,
      httpOnly: true,
    });

    // Respond to the client that login is successful
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
