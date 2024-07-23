import { Request, Response } from "express";
import Appointment from "../../../models/AppointmentModel";

// Get all approved and awaiting appointments, sorted by latest date
export const getApprovedAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch appointments that are approved and awaiting, sorted by date in descending order
    const appointments = await Appointment.find({
      approvalStatus: "approved",
      completionStatus: "awaiting",
    }).sort({ date: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};

// Mark appointment as served
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

// Mark appointments as missed if the time has expired
export const markAsMissed = async (): Promise<void> => {
  try {
    const now = new Date();

    // Update appointments that are approved, awaiting, and have passed the current time
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

// Utility function to periodically run markAsMissed
export const runMarkAsMissedJob = (): void => {
  setInterval(() => {
    markAsMissed().catch((error) => {
      console.error("Error in markAsMissedJob:", error);
    });
  }, 60000); // Run every minute
};
