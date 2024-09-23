"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_Controllers_1 = __importDefault(require("../controllers/orders.Controllers"));
const order_middleware_1 = __importDefault(require("../middlewares/order.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const ordersRouter = (0, express_1.Router)();
ordersRouter.get('/orders', orders_Controllers_1.default.getOrderAll);
ordersRouter.post('/orders', auth_middleware_1.default, order_middleware_1.default.validateUserId, order_middleware_1.default.validateProductIds, orders_Controllers_1.default.createOrder);
exports.default = ordersRouter;
