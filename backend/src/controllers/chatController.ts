// src/controllers/chatController.ts
import { Server, Socket } from 'socket.io';
import Message from '../models/chatModel';

export const handleChat = (io: Server) => {
	io.on('connection', (socket: Socket) => {
		console.log('User connected:', socket.id);

		socket.on('sendMessage', async data => {
			const newMessage = new Message(data);
			const savedMessage = await newMessage.save();
			io.emit('message', savedMessage);
		});

		socket.on('disconnect', () => {
			console.log('User disconnected:', socket.id);
		});
	});
};
