const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema"); // creating schema
const Todo = new mongoose.model("todo", todoSchema); // making a model based on that schema and object data maping

// get all the todos

router.get("/", async (req, res) => {
  const data = await Todo.find({ status: "active" }); //best practice not mixed up async await and call back function

  if (!data) {
    res.status(500).json({ success: "false" });
  } else {
    res.status(200).json({
      Data: data,
    });
  }
});

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
        message: "todos update to the database was successfull",
      });
    }
  });
});

// put todo

router.put("/:id", async (req, res) => {
  await Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: "i am over updated",
        description: "javascript",
        status: "maybe in actice",
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "there was a server problem",
        });
      } else {
        res.status(200).json({
          message: "todos inserted to the database successfully",
        });
      }
    }
  );
});

// delete todo

router.delete("/:id", async (req, res) => {});

module.exports = router;
