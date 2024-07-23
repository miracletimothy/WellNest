import express from "express";
import {
  getApprovedAppointments,
  markAsServed,
  markAsMissed, // Import the markAsMissed function
} from "../../controllers/healthWorkerControllers/AppointmentScheduling/ManageAppointmentsController";
import { authMiddleware, authorizeRole } from "../../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/get/approved",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getApprovedAppointments
);

router.post(
  "/serve/:id/serve",
  authMiddleware,
  authorizeRole(["health_worker"]),
  markAsServed
);

// Route to manually trigger marking appointments as missed
router.post(
  "/miss/:id/miss",
  authMiddleware,
  authorizeRole(["health_worker"]),
  async (req, res) => {
    try {
      await markAsMissed();
      res
        .status(200)
        .json({ message: "Appointments checked for missed status" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error marking appointments as missed", error });
    }
  }
);

export default router;
