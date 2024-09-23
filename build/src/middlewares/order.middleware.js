"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const joi_1 = __importDefault(require("joi"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
const OrderSchema = joi_1.default.object({
    userId: joi_1.default.number().min(3).required(),
});
async function validateUserId(req, res, next) {
    const { userId } = req.body;
    const { error } = OrderSchema.validate({ userId });
    if (error === null || error === void 0 ? void 0 : error.message.includes('required')) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_DATA')).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
    if (typeof userId !== 'number') {
        return res.status((0, mapStatusHTTP_1.default)('TYPE_INVALID')).json({ message: '"userId" must be a number' });
    }
    const foundUser = await user_model_1.default.findOne({ where: { id: userId } });
    if (!foundUser) {
        return res.status((0, mapStatusHTTP_1.default)('NOT_FOUND')).json({ message: '"userId" not found' });
    }
    return next();
}
async function validateProductIds(req, res, next) {
    const { productIds } = req.body;
    if (!productIds) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_DATA')).json({ message: '"productIds" is required' });
    }
    if (typeof productIds !== 'object') {
        return res.status((0, mapStatusHTTP_1.default)('TYPE_INVALID'))
            .json({ message: '"productIds" must be an array' });
    }
    if (productIds.length === 0) {
        return res.status((0, mapStatusHTTP_1.default)('TYPE_INVALID'))
            .json({ message: '"productIds" must include only numbers' });
    }
    return next();
}
exports.default = {
    validateUserId,
    validateProductIds,
};
