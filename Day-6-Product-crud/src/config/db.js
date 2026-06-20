const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://aakanksharajak:NJBmJdtArVLatN8Z@cluster0.oww4kqo.mongodb.net/')
        console.log('connect mongoDB')
    } catch (error) {
        console.log('Error in MongoDB', error)
    }
}
module.exports = connectDB