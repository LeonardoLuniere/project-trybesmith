"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_Routes_1 = __importDefault(require("./routes/products.Routes"));
const login_Routes_1 = __importDefault(require("./routes/login.Routes"));
const orders_Routes_1 = __importDefault(require("./routes/orders.Routes"));
// First Commit
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(login_Routes_1.default);
app.use(products_Routes_1.default);
app.use('/', orders_Routes_1.default);
// app.get('/products', (_req, res) => {
//   res.status(200).send('Aplicação está funcionando! Top');
// });
exports.default = app;
