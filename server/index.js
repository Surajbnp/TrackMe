const express = require("express");
const app = express();
const connection = require("./database/server");
require("dotenv").config();
const { TaskModel } = require("./models/Task.model");

const PORT = process.env.PORT || 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/api/todos", async (req, res) => {
  try {
    let todos = await TaskModel.find();
    res.status(200).send(todos);
  } catch {
    console.log("error");
  }
});

app.post("/api/todos/create", async (req, res) => {
  try {
    let data = new TaskModel(req.body);
    await data.save();
    res.status(200).send("task created!");
  } catch {
    res.send("something went wrong");
  }
});

app.delete("/api/todos/delete/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let response = await TaskModel.findOneAndDelete({ _id: id });
    res.status(200).send("task deleted !");
  } catch {
    res.send("something went wrong");
  }
});

app.put("/api/todos/update/:id", async (req, res) => {
  let { id } = req.params;

  try {
    await TaskModel.findOneAndUpdate({ _id: id, ...req.body });
    res.status(200).send("task updated !");
  } catch (err) {
    res.send("something went wrong");
  }
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch {
    console.log("error connecting to db");
  }
  console.log(`server is running on ${PORT}`);
});
