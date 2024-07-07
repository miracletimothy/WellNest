import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import appointmentRouter from './routes/appointmentRoutes';
import chatRoutes from './routes/chatRoutes';
import contentRouter from './routes/contentRoutes';
import recordRouter from './routes/recordRoutes';
import authRouter from './routes/authRoutes';

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	},
});

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	}),
);

app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/chat', chatRoutes(io));
app.use('/api/records', recordRouter);
app.use('/api/content', contentRouter);

// MongoDB connection
mongoose
	.connect('mongodb://localhost:27017/maternal_health', {})
	.then(() => {
		console.log('MongoDB connected');
	})
	.catch(err => {
		console.log('Failed to connect to MongoDB', err);
	});

export { app, server, io };
