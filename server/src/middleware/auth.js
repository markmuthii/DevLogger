import jwt from "jsonwebtoken";
import { User } from "../db/models/user.js";

export const authenticate = async (req, res, next) => {
  // Get the token from the cookies
  try {
    const token = req.cookies.devlogger_auth;

    if (!token) {
      throw new Error();
    }

    // Verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    console.log({ payload });

    // If the token is valid, get the user from the database using the id in the token data
    const user = await User.findById(payload.user._id);

    // Attach the user to the request
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error.message || "You do not have permission to access that resource",
    });
  }
};
