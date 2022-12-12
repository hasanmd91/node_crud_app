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

        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECTRET,
          { expiresIn: "1h" }
        );

        res.status(200).json({
          access_token: token,
          messgae: "login sucessfull",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed ",
        });
      }
    }
  } catch {
    res.status(401).json({
      error: "Authentication failed ",
    });
  }
});

module.exports = router;
