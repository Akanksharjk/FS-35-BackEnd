import express from 'express'
import { followUser, getMe, getUserProfile, searchUser, updateProfile } from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

const routes = express.Router()

routes.get('/getMe', authMiddleware, getMe)
routes.patch('/update-profile', authMiddleware, updateProfile)
routes.get('/search', authMiddleware, searchUser)
routes.patch('/follow/:id', authMiddleware, followUser)
routes.get('/:username', authMiddleware, getUserProfile)

export default routes
