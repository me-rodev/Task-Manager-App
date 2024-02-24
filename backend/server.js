const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./config/model/taskModel");

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/*const logger = (req, res, next) => {
    console.log("Middleware ran");
    console.log(req.method);
    next()
} */

// Routes
app.get("/", (req, res) => {
    res.send("Home")
})

// Create a Task
app.post("/api/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

const PORT = process.env.PORT || 5000;

// Method 2 Using Mongoose and .then to connect to the database first before starting up the server.
mongoose
    .connect(process.env.MONGO_URI, console.log("DB connected"))
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
