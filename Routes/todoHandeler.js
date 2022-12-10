const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema"); // creating schema
const Todo = new mongoose.model("todo", todoSchema); // making a model based on that schema and object data maping

// get all the todos

router.get("/", async (req, res) => {});

// get A todo by id

router.get("/:id", async (req, res) => {});

// post a todo

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "there was a server problem",
      });
    } else {
      res.status(200).json({
        message: "todo inserted to the database successfully",
      });
    }
  });
});

// post multipul todo

router.post("/all", async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "there was a server problem",
      });
    } else {
      res.status(200).json({
        message: "there was a server problem",
      });
    }
  });
});

// put todo

router.put("/:id", async (req, res) => {});

// delete todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
