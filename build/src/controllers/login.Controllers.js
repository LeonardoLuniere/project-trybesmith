"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_Services_1 = __importDefault(require("../services/login.Services"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
async function login(req, res) {
    try {
        const serviceResponse = await login_Services_1.default.verifyLogin(req.body);
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
exports.default = {
    login,
};
