import { Request, Response } from "express";
import Appointment from "../../models/AppointmentModel";

export const createAppointment = async (req: Request, res: Response) => {
  const { description, date, time, serviceId } = req.body;

  try {
    const newAppointment = new Appointment({
      description,
      date,
      time,
      serviceId,
    });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment" });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find().sort({ date: 1, time: 1 });
    res.status(200).json(appointments);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch appointments", details: err });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.status(200).json(appointment);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch appointment", details: err });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete appointment", details: err });
  }
};
