// src/routes/recordRoutes.ts
import { Router } from 'express';
import { getRecords, createRecord } from '../controllers/recordController';

const recordRouter = Router();

recordRouter.get('/fetch', getRecords);
recordRouter.post('/create', createRecord);

export default recordRouter;
