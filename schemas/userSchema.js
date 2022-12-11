const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requird: true,
  },
  username: {
    type: String,
    requird: true,
  },
  password: {
    type: String,
    requird: true,
  },
  status: {
    type: String,
    requird: ["active", "incative "],
  },
});

module.exports = userSchema;
