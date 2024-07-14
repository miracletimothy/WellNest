import express from 'express';
import path from 'path'; // Import the path module
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import pregnantWomenRoutes from './routes/pregnantWomenRoutes';
import healthWorkerRoutes from './routes/healthWorkerRoutes';
import contentRoutes from './routes/contentRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:5173', // Allow from specific origin
		credentials: true, // Allow credentials
		allowedHeaders: ['Content-Type', 'x-auth-token'], // Specify allowed headers
		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
	}),
);

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pw', pregnantWomenRoutes);
app.use('/api/hw', healthWorkerRoutes);
app.use('/api/ec', contentRoutes);

const startServer = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!, {});
		console.log('MongoDB connected');

		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error((error as Error).message);
		process.exit(1);
	}
};

startServer();
