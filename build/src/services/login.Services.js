"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function decodePassword(senha, senhaCode) {
    if (senha && senhaCode) {
        return bcryptjs_1.default.compare(senha, senhaCode);
    }
    return false;
}
async function verifyLogin(login) {
    if (!login.username || !login.password) {
        return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
    }
    const foundUser = await user_model_1.default.findOne({ where: { username: login.username } });
    const returnDecode = await decodePassword(login.password, foundUser === null || foundUser === void 0 ? void 0 : foundUser.dataValues.password);
    // console.log(returnDecode);
    if (foundUser && returnDecode) {
        const { id, username } = foundUser.dataValues;
        const token = jwt_util_1.default.sign({ id, username });
        return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
}
exports.default = {
    verifyLogin,
};
