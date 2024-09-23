import { Router } from 'express';
import productsControlles from '../controllers/products.Controllers';
import validateProduct from '../middlewares/products.middleware';
// import productsMiddleware from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.get('/products', productsControlles.getProducts);
productsRouter.post('/products', productsControlles.productRegister);
productsRouter.post(
  '/products', 
  validateProduct.validateProduct,
  productsControlles.productRegister,
);

export default productsRouter;