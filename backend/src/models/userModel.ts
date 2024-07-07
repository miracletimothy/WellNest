import { Schema, model } from 'mongoose';

interface UserInterface {
	email: string;
	password: string;
	role: 'patient' | 'healthworker';
}

const userSchema = new Schema<UserInterface>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['patient', 'healthworker'],
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = model<UserInterface>('User', userSchema);
export default User;
