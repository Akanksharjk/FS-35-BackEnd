import dotenv from 'dotenv'
import app from './src/app.js'
import { connectDB } from './src/config/db.js'
dotenv.config()

connectDB()

let PORT = process.env.port || 4000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})