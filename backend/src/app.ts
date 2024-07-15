import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db';
import path from 'path';
import authRoutes from './routes/authRoutes';
import pregnantWomenRoutes from './routes/pregnantWomenRoutes';
import healthWorkerRoutes from './routes/healthWorkerRoutes';
import contentRoutes from './routes/contentRoutes';

const app: Application = express();

dotenv.config();

connectDB();

app.use(express.json());

const allowedOrigins = ['https://well-nest-frontend.vercel.app', '*'];

app.use(
	cors({
		origin: allowedOrigins,
	}),
);

// Default
app.get('/', (req: Request, res: Response) => {
	res.status(201).json({ message: 'CMHMCS Server is Running!' });
});

// User routes
app.use('/api/auth', authRoutes);
app.use('/api/pw', pregnantWomenRoutes);
app.use('/api/hw', healthWorkerRoutes);
app.use('/api/ec', contentRoutes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`Server is running`));
