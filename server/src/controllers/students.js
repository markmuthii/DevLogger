import { Student } from "../db/models/student.js";

export const createStudents = async (req, res) => {
  // Get the data from the request
  const { name, email, phone } = req.body;

  try {
    // Validate that data
    if (!name || !email || !phone) {
      // If data is not valid, respond to the client with an error code and message
      throw new Error("All fields are required");
    }

    // If data is valid, add it to the database
    const student = await Student.create({ name, email, phone });

    // - Respond to the client with a success code and message
    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateStudent = (req, res) => {
  res.json({
    message: "PUT /students",
  });
};

export const deleteStudents = (req, res) => {
  res.json({
    message: "DELETE /students",
  });
};
