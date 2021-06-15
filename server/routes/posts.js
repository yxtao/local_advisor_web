import express from 'express';
import { getPosts , createPost, updatePost, deletePost, getPostById , getPostByPage } from '../controllers/posts.js';
import auth from '../middeware/auth.js';

const router = express.Router();   

//router.get('/', getPosts);
router.get('/:id',getPostById);
router.get('/',getPostByPage);
router.post('/', auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;