import { Request, Response } from "express";
import Schedule from "../../../models/AppointmentScheduling/ManageProviderScheduleModel";

export const getSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedules" });
  }
};

export const addSchedule = async (req: Request, res: Response) => {
  const { date, startTime, endTime, activity } = req.body;

  try {
    const newSchedule = new Schedule({ date, startTime, endTime, activity });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: "Error adding schedule" });
  }
};
