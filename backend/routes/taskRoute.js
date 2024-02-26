const express = require("express")
const Task = require("../model/taskModel")
const router = express.Router()
const { createdTask, getTasks } = require("../controllers/taskController")

router.post("/api/tasks", createdTask)
router.get("/api/tasks", getTasks)

module.exports = router