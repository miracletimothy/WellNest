import { Request, Response } from "express";
import Appointment from "../../../models/AppointmentModel";

export const getAppointmentRequests = async (req: Request, res: Response) => {
  try {
    const requests = await Appointment.find({ approvalStatus: "not approved" });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointment requests" });
  }
};

export const approveAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndUpdate(id, { approvalStatus: "approved" });
    res.status(200).json({ message: "Appointment approved" });
  } catch (error) {
    res.status(500).json({ message: "Error approving appointment" });
  }
};

export const dismissAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    await Appointment.findByIdAndUpdate(id, {
      approvalStatus: "canceled",
      message,
    });
    res.status(200).json({ message: "Appointment dismissed" });
  } catch (error) {
    res.status(500).json({ message: "Error dismissing appointment" });
  }
};
