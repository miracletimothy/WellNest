import { Request, Response } from "express";
import ServiceType from "../../../models/AppointmentScheduling/ServiceTypeModel";

// Get all service types
export const getAllServiceTypes = async (req: Request, res: Response) => {
  try {
    const serviceTypes = await ServiceType.find();
    res.json(serviceTypes);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Create a new service type
export const createServiceType = async (req: Request, res: Response) => {
  const { name, duration, description } = req.body;

  try {
    const newServiceType = new ServiceType({ name, duration, description });
    await newServiceType.save();
    res.status(201).json(newServiceType);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update an existing service type
export const updateServiceType = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, duration, description } = req.body;

  try {
    const updatedServiceType = await ServiceType.findByIdAndUpdate(
      id,
      { name, duration, description },
      { new: true }
    );

    if (!updatedServiceType) {
      return res.status(404).json({ message: "Service Type not found" });
    }

    res.json(updatedServiceType);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a service type
export const deleteServiceType = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedServiceType = await ServiceType.findByIdAndDelete(id);

    if (!deletedServiceType) {
      return res.status(404).json({ message: "Service Type not found" });
    }

    res.json({ message: "Service Type deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
