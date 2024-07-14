import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://miracletimothyofficial:eCbGR6Riqnyt22M9@cmhmcs-cluster-0.pcalzxq.mongodb.net/',
			{},
		);
		console.log('MongoDB Connected');
	} catch (err) {
		console.error((err as Error).message);
		process.exit(1);
	}
};

export default connectDB;
