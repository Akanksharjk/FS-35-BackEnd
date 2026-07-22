import express from 'express'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
import { upload } from '../config/multer.js'
import { createPostController } from '../controllers/post.controller.js'

const router = express.Router()

router.post('/create', authMiddleware, upload.array('image', 5), createPostController )

export default router