const express = require("express");
const mongoose = require("mongoose");
const todoHandeler = require("./Routes/todoHandeler");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// express app initialization
const app = express();
app.use(express.json()); // using json will me the req bod as json

//database connection with moongose

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1/todos", {
    Usenewurlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log(err));

//application routes

app.use("/todo", todoHandeler);

//default error handeler

function errorHandeler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  err.status(500).json({ error: err });
}

app.listen(port, host, () => console.log("server is running "));
