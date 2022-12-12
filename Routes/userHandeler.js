const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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

// login

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    console.log(user);
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPassword) {
        //generate token

        const token = jwt.sign({
          username: 


        })




        // res.status(200).json({
        // messgae: "login sucessfull",
        // });
      } else {
        res.status(500).json({
          error: "login unsucessfull",
        });
      }
    }
  } catch {
    res.status(500).json({
      error: "login unsucessfull",
    });
  }
});

module.exports = router;
