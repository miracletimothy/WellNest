import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import pregnantWomenRoutes from './routes/pregnantWomenRoutes';
import healthWorkerRoutes from './routes/healthWorkerRoutes';
import contentRoutes from './routes/contentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 || 6000;

// CORS Configuration
app.use(
	cors({
		origin: 'https://well-nest-frontend.vercel.app',
		credentials: true,
		allowedHeaders: ['Content-Type', 'x-auth-token'],
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	}),
);

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (req, res) => {
	res.json('CMHMCS Server is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/pw', pregnantWomenRoutes);
app.use('/api/hw', healthWorkerRoutes);
app.use('/api/ec', contentRoutes);

const startServer = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://miracletimothyofficial:eCbGR6Riqnyt22M9@cmhmcs-cluster-0.pcalzxq.mongodb.net/cmhmcs',
			{},
		);
		console.log('MongoAtlas connected');

		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error((error as Error).message);
		process.exit(1);
	}
};

startServer();
