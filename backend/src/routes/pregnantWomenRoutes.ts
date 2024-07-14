import express from 'express';
import { authMiddleware, authorizeRole } from '../middleware/authMiddleware';
import { getProfile } from '../controllers/pregnantWomenControllers/profileController';

const router = express.Router();

router.get(
	'/profile',
	authMiddleware,
	authorizeRole(['pregnant_woman']),
	getProfile,
);

export default router;
