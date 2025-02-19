export const createStudents = (req, res) => {
  res.json({
    message: "POST /students",
  });
};

export const getStudents = (req, res) => {
  res.json({
    message: "GET /students",
  });
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
