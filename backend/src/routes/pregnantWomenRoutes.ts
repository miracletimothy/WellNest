import express from "express";
import { authMiddleware, authorizeRole } from "../middleware/authMiddleware";
import { getProfile } from "../controllers/pregnantWomenControllers/profileController";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment,
} from "../controllers/pregnantWomenControllers/AppointmentController";

import { getAllServiceTypes } from "../controllers/healthWorkerControllers/AppointmentScheduling/ServiceTypeController";

const router = express.Router();

// Profile
router.get(
  "/profile",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  getProfile
);

// GET All ServiceTypes
router.get(
  "/appointments/get/service-types",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  getAllServiceTypes
);

// Appointments
router.post(
  "/appointments/create",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  createAppointment
);
router.get(
  "/appointments/view",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  getAppointments
);
router.get(
  "/appointments/view/:id",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  getAppointmentById
);

router.delete(
  "/appointments/delete/:id",
  authMiddleware,
  authorizeRole(["pregnant_woman"]),
  deleteAppointment
);

export default router;
