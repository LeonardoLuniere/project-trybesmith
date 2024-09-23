"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../database/models/product.model"));
async function create(product) {
    // let responseService: ServiceResponse<Product>;
    const newProduct = await product_model_1.default.create(product);
    const { orderId, ...response } = newProduct.dataValues;
    return { status: 'SUCCESSFUL', data: response };
}
async function getProducts() {
    const products = await product_model_1.default.findAll();
    return { status: 'SUCCESSFUL', data: products };
}
exports.default = {
    getProducts,
    create,
};
