import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { verifyCode } from '../controllers/2faController';

const router = Router();

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/register', register);
router.post('/verify', verifyCode);
router.post('/login', login);

export default router;
