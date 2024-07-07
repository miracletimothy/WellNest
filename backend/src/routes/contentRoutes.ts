// src/routes/contentRoutes.ts
import { Router } from 'express';
import { getContents, createContent } from '../controllers/contentController';

const contentRouter = Router();

contentRouter.get('/fetch', getContents);
contentRouter.post('/create', createContent);

export default contentRouter;
