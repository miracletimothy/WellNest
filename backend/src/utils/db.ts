import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/cmhmcs', {});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error((err as Error).message);
		process.exit(1);
	}
};

export default connectDB;
