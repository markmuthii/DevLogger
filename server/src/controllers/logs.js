export const createLogs = (req, res) => {
  res.json({
    message: "POST /logs",
  });
};

export const getLogs = (req, res) => {
  res.json({
    message: "GET /logs",
  });
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
