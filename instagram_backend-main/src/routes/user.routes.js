import express from 'express'
import { changePassword, followingUser, followUser, getFollower, getMe, getUserProfile, searchUser, unfollowUser, updateProfile } from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

const routes = express.Router()

routes.get('/getMe', authMiddleware, getMe)
routes.patch('/update-profile', authMiddleware, updateProfile)
routes.get('/search', authMiddleware, searchUser)
routes.patch('/follow/:id', authMiddleware, followUser)
routes.patch('/follower/:id', authMiddleware, followingUser)
routes.patch('/unfollow/:id', authMiddleware, unfollowUser)
routes.get('/:id/followers', authMiddleware, getFollower)
routes.patch('/change-password', authMiddleware, changePassword)
routes.get('/:username', authMiddleware, getUserProfile)

export default routes
