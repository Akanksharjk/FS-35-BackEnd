const mongoose = require('mongoose')

const userShcema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        minlength: [6, 'minimum 6 characters required']
    }
}, {
    timestamps: true
})

const userModel = mongoose.model('users', userShcema)
module.exports = userModel