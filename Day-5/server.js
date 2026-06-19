const express = require('express')
const { default: mongoose } = require('mongoose')
const UserModel = require('./models/user.model')

const app = express()
app.use(express.json())
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://aakanksharajak:NJBmJdtArVLatN8Z@cluster0.oww4kqo.mongodb.net/ ")
    console.log("MongoDB Connected")
}
connectDB()

app.get('/', (req, res) => {
    res.send('okkkkkk')
})

app.post('/id', async (req, res) => {
    const { name, email, password, mobile } = req.body

    if (!name || !email || !password || !mobile)
        return res.status(400).json({
            success: false,
            message: "All field are require"
        })
    const NewUser = await UserModel.create(
        name,
        email,
        password,
        mobile
    )

    return res.status(201).json({
        success: true,
        message: "User Created",
        data: NewUser
    })
})

app.listen(3000, () => {
    console.log("server is running on PORT 3000");

})




