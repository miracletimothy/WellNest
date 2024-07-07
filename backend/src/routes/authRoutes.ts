import { Router } from 'express';
import { Register, Login } from '../controllers/authController';

const authRouter = Router();

authRouter.post('/register', Register);
authRouter.post('/login', Login);

export default authRouter;
