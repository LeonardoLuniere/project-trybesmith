"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../database/models/product.model"));
const order_model_1 = __importDefault(require("../database/models/order.model"));
async function getOrdersAll() {
    const orders = await order_model_1.default.findAll({ include: {
            model: product_model_1.default,
            as: 'productIds',
            attributes: ['id'],
        } });
    const response = orders.map((order) => {
        const { productIds, userId, id } = order.dataValues;
        return {
            id,
            userId,
            productIds,
        };
    });
    return { status: 'SUCCESSFUL', data: response };
}
async function createOrder(order) {
    const { userId, productIds } = order;
    const newOrder = await order_model_1.default.create({ userId });
    console.log(newOrder);
    if (productIds) {
        const updateProducts = productIds
            .map((prod) => product_model_1.default
            .update({ orderId: newOrder.dataValues.id }, { where: { id: prod } }));
        await Promise.all(updateProducts);
    }
    const responseService = {
        status: 'SUCCESSFUL', data: order
    };
    return responseService;
}
exports.default = {
    getOrdersAll,
    createOrder,
};
