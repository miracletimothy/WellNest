import express from "express";
import {
  getMessages,
  getMessagesByRole,
  createMessage,
} from "../../controllers/Chat/MessageController";

const router = express.Router();

router.get("/", getMessages);
router.get("/role/:role", getMessagesByRole);
router.post("/create", createMessage);

export default router;
