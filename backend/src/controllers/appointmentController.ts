// src/controllers/appointmentController.ts
import { Request, Response } from 'express';
import Appointment from '../models/appointmentModel';

export const getAppointments = async (req: Request, res: Response) => {
	try {
		const appointments = await Appointment.find();
		res.json(appointments);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch appointments' });
	}
};

export const createAppointment = async (req: Request, res: Response) => {
	const newAppointment = new Appointment(req.body);
	const savedAppointment = await newAppointment.save();
	res.json(savedAppointment);
};
