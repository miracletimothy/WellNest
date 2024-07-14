import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/UserModel';
import TwoFactor from '../models/TwoFactorModel';
import { sendVerificationEmail } from '../services/emailService';

export const register = async (req: Request, res: Response) => {
	const { email, firstName, lastName, password, role } = req.body;

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		}

		const code = crypto.randomBytes(3).toString('hex');

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const twoFactorRecord = new TwoFactor({
			email,
			firstName,
			lastName,
			password: hashedPassword,
			role,
			code,
			expiresAt: new Date(Date.now() + 15 * 60 * 1000),
		});

		await twoFactorRecord.save();

		await sendVerificationEmail(email, firstName, code);

		res.json({ msg: 'Verification code sent to your email' });
	} catch (err) {
		console.error((err as Error).message);
		res.status(500).send('Server error');
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ msg: 'Invalid credentials' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ msg: 'Invalid credentials' });
		}

		const payload = {
			user: {
				id: user._id,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role,
				isVerified: user.isVerified,
				profilePic: user.profilePic,
			},
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET as string,
			{ expiresIn: '48h' },
			(err, token) => {
				if (err) throw err;
				res.json({ token, user: payload.user });
			},
		);
	} catch (err) {
		console.error((err as Error).message);
		res.status(500).send('Server error');
	}
};
