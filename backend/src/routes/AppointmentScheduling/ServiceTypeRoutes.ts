import { Router } from "express";
import {
  getAllServiceTypes,
  createServiceType,
  updateServiceType,
  deleteServiceType,
} from "../../controllers/healthWorkerControllers/AppointmentScheduling/ServiceTypeController";
import { authMiddleware, authorizeRole } from "../../middleware/authMiddleware";

const router = Router();

router.get(
  "/get/service-types",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getAllServiceTypes
);
router.post(
  "/create/service-types",
  authMiddleware,
  authorizeRole(["health_worker"]),
  createServiceType
);
router.put(
  "/update/service-types/:id",
  authMiddleware,
  authorizeRole(["health_worker"]),
  updateServiceType
);
router.delete(
  "/delete/service-types/:id",
  authMiddleware,
  authorizeRole(["health_worker"]),
  deleteServiceType
);

export default router;
