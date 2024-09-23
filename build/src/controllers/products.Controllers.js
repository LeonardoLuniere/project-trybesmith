"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_Service_1 = __importDefault(require("../services/products.Service"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
async function getProducts(req, res) {
    try {
        const serviceResponse = await products_Service_1.default.getProducts();
        if (serviceResponse.status !== 'SUCCESSFUL') {
            return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
        }
        res.status(200).json(serviceResponse.data);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Algo deu Errado');
    }
}
async function productRegister(req, res) {
    const serviceResponse = await products_Service_1.default.create(req.body);
    return res.status(201).json(serviceResponse.data);
}
exports.default = {
    productRegister,
    getProducts,
};
// const { name, price, orderId } = req.body;
//   const serviceResponse = await productService.create({
//     name, price, orderId,
//   });
// if (serviceResponse.status !== 'SUCCESSFUL') {
//   return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
// }
// return res.status(201).json(serviceResponse.data);
// }
