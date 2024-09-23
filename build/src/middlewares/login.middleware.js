"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const validFields = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status((0, mapStatusHTTP_1.default)('INVALID_DATA')).json({
            message: '"username" and "password" are required'
        });
    }
    next();
};
exports.default = validFields;
