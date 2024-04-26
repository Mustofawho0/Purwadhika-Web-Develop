import { Router } from 'express';
import { create } from '../controllers/LibraryControllers';

const router = Router();

router.post('/', create);

export default router;
