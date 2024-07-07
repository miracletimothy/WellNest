// src/routes/chatRoutes.ts
import { Server, Socket } from 'socket.io';
import { Router } from 'express';
import { handleChat } from '../controllers/chatController';

const chatRouter = Router();

export default (io: Server) => {
	handleChat(io);
	return chatRouter;
};
