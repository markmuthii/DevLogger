import { Device } from "../db/models/device.js";
import { Student } from "../db/models/student.js";

export const createDevices = async (req, res) => {
  // Get the data from the request
  const { model, serialNumber, type, colour, student } = req.body;

  try {
    // Validate that data
    if (!model || !serialNumber || !type || !colour || !student) {
      // If data is not valid, respond to the client with an error code and message
      throw new Error("All fields are required");
    }

    // If data is valid, add it to the database
    const device = await Device.create({
      model,
      serialNumber,
      type,
      colour,
      student,
    });

    // - Respond to the client with a success code and message
    res.status(201).json({
      success: true,
      data: device,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getDevices = async (req, res) => {
  try {
    let devices = await Device.find().populate("student");

    res.json({
      success: true,
      data: devices,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateDevice = (req, res) => {
  res.json({
    message: "PUT /devices",
  });
};

export const deleteDevices = (req, res) => {
  res.json({
    message: "DELETE /devices",
  });
};
