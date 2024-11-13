const express = require("express");
const courses = require("../Data/data");
const router = express.Router();
const Course = require('../modules/course') 

router.get("/", async (req, res) => {
  //res.send(courses);

  const result = await Course.find();
  res.send(result)

});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const course = courses.find((courses) => courses.id === id);
  if (course) {
    // if(courses==!null)
    res.send(course);
  } else {
    res.status(404).send("Product was not found!");
  }
});

router.post("/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.status(201).send(course);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const course = courses.find((c) => c.id === id);
  if (course) {
    courses = courses.filter((c) => c.id !== id);
    res.send(course);
  } else {
    res.status(404).send("course not found");
  }
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const course = courses.find((course) => course.id === id);
  if (course) {
    courses = courses.map((course) =>
      course.id === id ? { ...courses, name: req.body.name } : course
    );
  } else {
    res.status(404).send("course is not found");
  }
});
module.exports = router;
