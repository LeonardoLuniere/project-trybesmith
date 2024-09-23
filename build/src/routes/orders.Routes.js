"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_Controllers_1 = __importDefault(require("../controllers/orders.Controllers"));
const ordersRouter = express_1.default.Router();
ordersRouter.get('/orders', orders_Controllers_1.default.getAllOrders);
exports.default = ordersRouter;
