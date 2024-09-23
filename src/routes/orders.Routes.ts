import express from 'express';
import ordersController from '../controllers/orders.Controllers';

const ordersRouter = express.Router();

ordersRouter.get('/orders', ordersController.getAllOrders);

export default ordersRouter;