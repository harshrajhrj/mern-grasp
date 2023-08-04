const student = require("../schema/student");
const app = require("express").Router();

// client http://localhost:8080/api/student POST
// /api/student
app.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const req_name = req.body.name;
    const req_age = req.body.age;
    const req_dob = req.body.dob;
    const req_roll = req.body.roll;

    const newStudent = new student({
      name: req_name,
      age: req_age,
      dob: req_dob,
      roll: req_roll,
    });

    await newStudent.save().then((data) => {
      console.log(data);
    });
    res.status(200).json({
      message: "Your data has been saved successfully.",
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
