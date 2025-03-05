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
  const { status } = req.query;

  try {
    const logs = await Log.find({
      status,
    })
      .populate("user", ["name"])
      .populate("device", ["model", "student"]);

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

export const updateLog = async (req, res) => {
  const { logID } = req.params;

  try {
    await Log.findByIdAndUpdate(logID, { status: "inactive" });

    res.json({
      message: "Log updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteLogs = (req, res) => {
  res.json({
    message: "DELETE /logs",
  });
};
