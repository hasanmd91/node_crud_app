const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");
const userSchema = require("../schemas/userSchema");
const User = new mongoose.model("user", userSchema); // creating a model

// signup

router.post("/signup", async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashPassword,
    });
    await newUser.save();
    res.status(500).json({
      messgae: "user was signed up successfully",
    });
  } catch {
    res.status(200).json({
      error: "server error",
    });
  }
});

module.exports = router;
