const mongoose = require('mongoose')

const UserName = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String
})

const UserModel = mongoose.model("user", UserName)
module.exports = UserModel