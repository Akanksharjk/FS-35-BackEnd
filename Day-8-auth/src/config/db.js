const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0/auth")
        console.log("connected mongoDB")
    } catch (error) {
        console.log("Error in MongoDB", error)
    }
}

module.exports = connectDB