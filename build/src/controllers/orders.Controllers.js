"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_Services_1 = __importDefault(require("../services/orders.Services"));
const getAllOrders = async (req, res) => {
    const allOrders = await orders_Services_1.default.getAllOrders();
    return res.status(200).json(allOrders);
};
const ordersController = {
    getAllOrders,
};
exports.default = ordersController;
