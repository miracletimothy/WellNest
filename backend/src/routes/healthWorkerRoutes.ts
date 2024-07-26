import express from "express";
import { authMiddleware, authorizeRole } from "../middleware/authMiddleware";
import { getProfile } from "../controllers/healthWorkerControllers/profileController";
import { getCategories } from "../controllers/healthWorkerControllers/content/categoryController";

const router = express.Router();

router.get(
  "/profile",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getProfile
);
router.get(
  "/content-categories",
  authMiddleware,
  authorizeRole(["health_worker"]),
  getCategories
);

export default router;
