import { Request, Response } from "express";
import Appointment from "../../../models/AppointmentModel";

export const getApprovedAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const appointments = await Appointment.find({
      approvalStatus: "approved",
      completionStatus: "awaiting",
    }).sort({ date: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};

export const markAsServed = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { completionStatus: "complete" },
      { new: true }
    );

    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Appointment marked as served", appointment });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error marking appointment as served", error });
  }
};

export const markAsMissed = async (): Promise<void> => {
  try {
    const now = new Date();

    const result = await Appointment.updateMany(
      {
        approvalStatus: "approved",
        completionStatus: "awaiting",
        date: { $lt: now },
      },
      { completionStatus: "missed" }
    );

    console.log("Appointments marked as missed:", result);
  } catch (error) {
    console.error("Error marking appointments as missed", error);
  }
};

export const runMarkAsMissedJob = (): void => {
  setInterval(() => {
    markAsMissed().catch((error) => {
      console.error("Error in markAsMissedJob:", error);
    });
  }, 60000);
};
