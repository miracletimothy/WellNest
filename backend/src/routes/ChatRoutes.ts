import { Router } from "express";
import Chat from "../models/ChatModel";
import Message from "../models/ChatModel";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch chats" });
  }
});

router.get("/:chatId/messages", async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await Message.find({ chatId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

export default router;
