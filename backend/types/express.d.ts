import { Request } from 'express';

declare module 'express' {
	export interface Request {
		userId?: string;
		userRole?: 'pregnant_woman' | 'health_worker';
	}
}
