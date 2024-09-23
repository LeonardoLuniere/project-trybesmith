"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET || 'secret';
function sign(payload) {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    return token;
}
function verify(token) {
    const decoded = jsonwebtoken_1.default.verify(token, secret);
    return decoded;
}
exports.default = {
    sign,
    verify,
};
