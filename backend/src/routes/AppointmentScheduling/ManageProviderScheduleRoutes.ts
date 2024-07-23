import { Router } from "express";
import {
  getSchedules,
  addSchedule,
} from "../../controllers/healthWorkerControllers/AppointmentScheduling/ProviderScheduleController";
import { authMiddleware, authorizeRole } from "../../middleware/authMiddleware";

const router = Router();

router.get(
  "/get/provider-schedules",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getSchedules
);
router.post(
  "/create/provider-schedules",
  authMiddleware,
  authorizeRole(["health_worker"]),
  addSchedule
);

export default router;
