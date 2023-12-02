import express from 'express'
import * as postController from '../controllers/post'

const router = express.Router()
router.get('/all', postController.getPosts)
router.get('/post', postController.getLimitPosts)
router.get('/new-posts', postController.getNewPosts)


export default router