import express, { Router } from 'express';
import LibraryRouters from './LibraryRouters';

const router = Router();
router.use(express.json());

router.use('/library', LibraryRouters);

export default router;
