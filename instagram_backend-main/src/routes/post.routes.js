import express from 'express'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
import { upload } from '../config/multer.js'
import { createPostController, getAllPostController, updatePostController } from '../controllers/post.controller.js'

const router = express.Router()

router.post('/create', authMiddleware, upload.array('image', 5), createPostController )

router.get('/', getAllPostController)
router.put('/update/:id', authMiddleware, updatePostController)

export default router