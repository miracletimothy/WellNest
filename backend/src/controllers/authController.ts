import { Request, Response } from 'express';
import User from '../models/userModel';

interface RequestBodyInterface {
	email: string;
	password: string;
	role: 'patient' | 'healthworker';
}

export const Register = async (req: Request, res: Response) => {
	const { email, password, role } = <RequestBodyInterface>await req.body;
	if (!email || !password || !role) {
		res.status(400).json({ message: 'All fields required' });
		return;
	} else if (password.length < 6) {
		res
			.status(400)
			.json({ message: 'Password must be 6 characters of greater' });
		return;
	}
	let user = new User({ email, password, role });
	try {
		await user.save();
		console.log(user);
		res.status(201).json({ message: 'Saved user:', user });
	} catch (error) {
		console.log(error);
	}
};

export const Login = async (req: Request, res: Response) => {
	try {
		const { email, password } = <RequestBodyInterface>req.body;
		if (!email || !password) {
			res.status(400).json({ message: 'All fields are required' });
			return;
		}
		let user = { email, password };
		let newUser = await User.find({ email, password });

		return;
	} catch (error) {
		console.log('Login Failed');
	}
};
