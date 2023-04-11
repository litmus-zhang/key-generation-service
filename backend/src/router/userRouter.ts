import { Router } from 'express';
import { UserController } from '../controller/UserController';

const userRouter = Router();

const userController = new UserController();
userRouter.post('/', (req, res, next) => userController.createOne(req, res, next));


export default userRouter;