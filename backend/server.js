const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute")

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(taskRoutes)

/*const logger = (req, res, next) => {
    console.log("Middleware ran");
    console.log(req.method);
    next()
} */

// Routes
app.get("/", (req, res) => {
    res.send("Home")
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
