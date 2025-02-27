import { Log } from "../db/models/log.js";

export const createLogs = async (req, res) => {
  const logs = req.body;

  try {
    // if (!user || !device) {
    //   throw new Error("All fields are required");
    // }

    const newLogs = await Log.create(logs);

    res.json({
      success: true,
      data: newLogs,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("user", ["name"]).populate("device");

    res.json({
      success: true,
      data: logs,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateLog = (req, res) => {
  res.json({
    message: "PUT /logs",
  });
};

export const deleteLogs = (req, res) => {
  res.json({
    message: "DELETE /logs",
  });
};
