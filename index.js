import express from "express";

const app = express();
const publicRouter = express.Router();

publicRouter.get("/:user", (req, res) => {
  res.send(`hellow ${req.user}`);
});

app.use("/", publicRouter);

const port = 3001;

app.listen(port, () => console.log("server is running "));
