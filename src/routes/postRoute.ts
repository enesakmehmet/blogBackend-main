import { Router } from 'express';

import { listPosts,addPost,getPost,editPost,removePost } from '../controllers/postController.js';

const router = Router();

router.get('/', listPosts);
router.post('/', addPost);
router.get('/:id', getPost);
router.put('/:id', editPost);
router.delete('/:id', removePost);

export default router;