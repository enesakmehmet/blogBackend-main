import { Router } from 'express';
import { listCategories,getCategory,addCategory } from '../controllers/categoryControllers.js';

const  router = Router();

router.get('/', listCategories);
router.get('/:id', getCategory);
router.post('/', addCategory);

export default router;
