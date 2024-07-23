import { Request, Response } from "express";
import Message from "../../models/Chat/MessageModel";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getMessagesByRole = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find({ role: req.params.role });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  const message = new Message({
    text: req.body.text,
    role: req.body.role,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
