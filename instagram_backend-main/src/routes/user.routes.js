import express from 'express'
import { getMe, getUserProfile, updateProfile } from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

const routes = express.Router()

routes.get('/getMe', authMiddleware, getMe)
routes.patch('/update-profile', authMiddleware, updateProfile)
routes.get('/:username', authMiddleware, getUserProfile)

export default routes
