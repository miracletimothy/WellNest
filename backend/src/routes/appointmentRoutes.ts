// src/routes/appointmentRoutes.ts
import { Router } from 'express';
import {
	getAppointments,
	createAppointment,
} from '../controllers/appointmentController';

const appointmentRouter = Router();

appointmentRouter.get('/fetch', getAppointments);
appointmentRouter.post('/create', createAppointment);

export default appointmentRouter;
