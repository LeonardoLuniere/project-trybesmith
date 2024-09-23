"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../database/models/order.model"));
const product_model_1 = __importDefault(require("../database/models/product.model"));
const getAllOrders = async () => {
    const orders = await order_model_1.default.findAll({
        include: [
            {
                model: product_model_1.default,
                as: 'productIds',
                attributes: ['id'],
            },
        ],
    });
    const OrderWithProducts = orders.map((order) => {
        var _a;
        return ({
            id: order.dataValues.id,
            userId: order.dataValues.userId,
            productIds: ((_a = order.dataValues.productIds) === null || _a === void 0 ? void 0 : _a.map((product) => product.id)) || [],
        });
    });
    return OrderWithProducts;
};
const ordersService = {
    getAllOrders,
};
exports.default = ordersService;
