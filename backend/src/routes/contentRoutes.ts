import express from 'express';
import {
	createContent,
	getContentByCategoryAndType,
} from '../controllers/healthWorkerControllers/content/contentController';
import { authMiddleware, authorizeRole } from '../middleware/authMiddleware';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
	},
});

const upload = multer({ storage });

// Route to create content
router.post(
	'/create',
	authMiddleware,
	authorizeRole(['health_worker']),
	upload.single('file'),
	createContent,
);

// Route to get content by category and type
router.get(
	'/',
	authMiddleware,
	authorizeRole(['health_worker']),
	getContentByCategoryAndType,
);

export default router;
