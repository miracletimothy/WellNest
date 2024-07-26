import { Router } from "express";
import { createContent } from "../../controllers/Content/ContentController";
import { authMiddleware, authorizeRole } from "../../middleware/authMiddleware";

const router = Router();

router.post(
  "/upload-content",
  authMiddleware,
  authorizeRole(["health_worker"]),
  createContent
);

export default router;
