import { Router } from 'express';
import UserController from '../controllers/login.Controllers';

const userRouter = Router();

userRouter.post('/login', UserController.login);

export default userRouter;