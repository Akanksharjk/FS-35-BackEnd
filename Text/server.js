const express = require('express')
const connectDB = require('./src/config/db')
const createRoutes = require('./src/routes/product.routes')

const app = express()
connectDB()

app.use(express.json())

app.use('/api/create', createRoutes)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

