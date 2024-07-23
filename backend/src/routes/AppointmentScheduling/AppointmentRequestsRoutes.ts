import express from "express";
import {
  getAppointmentRequests,
  approveAppointment,
  dismissAppointment,
} from "../../controllers/healthWorkerControllers/AppointmentScheduling/AppointmentRequetsController";
import { authMiddleware, authorizeRole } from "../../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/get/appointment-requests",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getAppointmentRequests
);
router.post(
  "/approve/appointment-request/:id/approve",
  authMiddleware,
  authorizeRole(["health_worker"]),
  approveAppointment
);
router.post(
  "/dismiss/appointment-request/:id/dismiss",
  authMiddleware,
  authorizeRole(["health_worker"]),
  dismissAppointment
);

export default router;
