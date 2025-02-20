export const createUsers = (req, res) => {
  res.json({
    message: "POST /users",
  });
};

export const getUsers = (req, res) => {
  res.json({
    message: "GET /users",
  });
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
