"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_Controllers_1 = __importDefault(require("../controllers/login.Controllers"));
const userRouter = (0, express_1.Router)();
userRouter.post('/login', login_Controllers_1.default.login);
exports.default = userRouter;
