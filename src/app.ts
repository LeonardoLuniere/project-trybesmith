import express from 'express';
import controllersRouteProduct from './routes/products.Routes';
import loginRoutes from './routes/login.Routes';
import ordersRouter from './routes/orders.Routes';
// First Commit
const app = express();

app.use(express.json());

app.use(loginRoutes);
app.use(controllersRouteProduct);
app.use('/', ordersRouter);
// app.get('/products', (_req, res) => {
//   res.status(200).send('Aplicação está funcionando! Top');
// });

export default app;
