"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_Controllers_1 = __importDefault(require("../controllers/products.Controllers"));
const products_middleware_1 = __importDefault(require("../middlewares/products.middleware"));
// import productsMiddleware from '../middlewares/products.middleware';
const productsRouter = (0, express_1.Router)();
productsRouter.get('/products', products_Controllers_1.default.getProducts);
productsRouter.post('/products', products_Controllers_1.default.productRegister);
productsRouter.post('/products', products_middleware_1.default.validateProduct, products_Controllers_1.default.productRegister);
exports.default = productsRouter;
