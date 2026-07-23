import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use(urlencoded({ extended: true }))
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

export default app