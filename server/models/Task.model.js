const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String },
  status: { type: Boolean, default : false },
  description: { type: String },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = {
  TaskModel,
};
