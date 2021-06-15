import express from 'express';
import { getPostsBySearchQuery } from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPostsBySearchQuery);

export default router;