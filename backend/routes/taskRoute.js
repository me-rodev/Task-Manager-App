const express = require("express")
const Task = require("../models/taskModel")
const router = express.Router()
const { createdTask, getTasks, getTask } = require("../controllers/taskController")

router.post("/api/tasks", createdTask)
router.get("/api/tasks", getTasks)
router.get("/api/tasks/:id", getTask)

module.exports = router