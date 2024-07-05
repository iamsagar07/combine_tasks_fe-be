const router = require("express").Router();

const User = require("../models/user");
const Task = require("../models/task");

// const {authenticateToken} = require('./auth')

//create-task
router.post("/create-task", async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.headers; // Assuming this is the userId

    // Construct a unique identifier based on userId and description
    const uniqueKey = `${id}-${description}`;

    // Check if a task with the same uniqueKey already exists
    const existingTask = await Task.findOne({ uniqueKey });

    console.log(uniqueKey)

    if (existingTask) {
      return res.status(400).json({ message: "This description is already used by this user" });
    }

    const newTask = new Task({ title, description, uniqueKey });
    const saveTask = await newTask.save();

    const taskId = saveTask._id;
    await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });

    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});


// get all tasks


router.get("/get-all-tasks", async (req, res) => {
try {
const { id } = req.headers;
const userData = await User.findById(id);
res.status(200).json({ data: userData });
}
catch (error) {
console.log(error);
res.status(400).json({ message: "Internal Server Error" });
}
});

module.exports = router;
