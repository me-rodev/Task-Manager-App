const Task = require("../models/taskModel");

// Create a task
const createdTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get a single task
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Delete task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}

module.exports = {
    createdTask,
    getTasks,
    getTask,
    deleteTask,
};