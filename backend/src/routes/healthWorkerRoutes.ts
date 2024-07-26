import express from "express";
import { authMiddleware, authorizeRole } from "../middleware/authMiddleware";
import { getProfile } from "../controllers/healthWorkerControllers/profileController";

const router = express.Router();

router.get(
  "/profile",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getProfile
);

export default router;
