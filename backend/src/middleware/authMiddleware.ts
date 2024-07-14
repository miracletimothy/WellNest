import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthRequest extends Request {
	user?: any;
}

export const authMiddleware = (
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) => {
	const token = req.header('x-auth-token');
	console.log('Token:', token);

	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
		console.log('Decoded Token:', decoded);

		req.user = (decoded as any).user;
		console.log('User Role:', req.user.role);
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
		console.error('Token verification failed:', err);
	}
};

export const authorizeRole = (roles: string[]) => {
	return (req: AuthRequest, res: Response, next: NextFunction) => {
		if (!roles.includes(req.user?.role)) {
			return res.status(403).json({ msg: 'Unauthorized' });
		}
		next();
	};
};
