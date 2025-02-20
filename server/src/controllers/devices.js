export const createDevices = (req, res) => {
  res.json({
    message: "POST /devices",
  });
};

export const getDevices = (req, res) => {
  res.json({
    message: "GET /devices",
  });
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
