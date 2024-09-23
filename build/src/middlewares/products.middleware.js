"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const ProductSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
    price: joi_1.default.string().min(3).required(),
});
async function validateProduct(req, res, next) {
    const { name, price } = req.body;
    const { error } = ProductSchema.validate({ name, price });
    if (error === null || error === void 0 ? void 0 : error.message.includes('required')) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_STRING')).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
    if (error === null || error === void 0 ? void 0 : error.message.includes('string')) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_STRING')).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
    if (name.length <= 3 || price.length <= 3) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_STRING')).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
    return next();
}
exports.default = {
    validateProduct,
};
