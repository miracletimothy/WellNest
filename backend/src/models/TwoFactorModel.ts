import { Schema, model, Document } from 'mongoose';

interface ITwoFactor extends Document {
	email: string;
	firstName: string;
	lastName?: string;
	password: string;
	role: string;
	code: string;
	expiresAt: Date;
}

const TwoFactorSchema = new Schema<ITwoFactor>({
	email: { type: String, required: true },
	firstName: { type: String, required: false },
	lastName: { type: String, required: false },
	password: { type: String, required: true },
	role: { type: String, required: true },
	code: { type: String, required: true },
	expiresAt: {
		type: Date,
		required: true,
		default: Date.now,
		index: { expires: '15m' },
	},
});

export default model<ITwoFactor>('TwoFactor', TwoFactorSchema);
