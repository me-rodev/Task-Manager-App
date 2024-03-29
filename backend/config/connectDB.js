const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};

module.exports = connectDB

// This function was used in server.js to connect to mongoDB and start the server

// Method 1 where there is a connectDB.js file to handle the database connection separately before starting up the server.
// const startServer = async () => {
//     try {
//         await connectDB()
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (error) {

//     }
// };
// startServer();