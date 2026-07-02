const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0/productDB')
        console.log("Concted mongoDB")
    } catch (error) {
        console.log('error in mongoDB', error)
    }
}

module.exports = connectDB