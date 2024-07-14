import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
	firstName: string;
	lastName?: string;
	email: string;
	password: string;
	role: 'pregnant_woman' | 'health_worker';
	isVerified: boolean;
	twoFactorSecret?: string;
	profilePic?: string;
}

const UserSchema: Schema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: false },
		password: { type: String, required: true },
		role: {
			type: String,
			required: true,
			enum: ['pregnant_woman', 'health_worker'],
		},
		isVerified: { type: Boolean, default: false },
		twoFactorSecret: { type: String },
		profilePic: {
			type: String,
			default:
				'https://github.com/miracletimothy/assets/blob/main/user.png?raw=true',
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model<IUser>('User', UserSchema);
