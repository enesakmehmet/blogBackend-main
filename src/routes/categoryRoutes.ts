import { Router } from 'express';
import { listCategories } from '../controllers/categoryControllers.js';

const  router = Router();

router.get('/', listCategories);

export default router;
