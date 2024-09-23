"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token é obrigatório' });
    }
    try {
        const decoded = jwt_util_1.default.verify(authorization);
        const users = await user_model_1.default.findOne({ where: { username: decoded.username } });
        if (!users)
            return res.status(401).json({ message: 'Token inválido' });
        next();
    }
    catch (e) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}
exports.default = authMiddleware;
