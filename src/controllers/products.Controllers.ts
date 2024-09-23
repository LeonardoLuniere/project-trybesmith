import { Request, Response } from 'express';
import productService from '../services/products.Service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getProducts(req: Request, res: Response) {
  try {
    const serviceResponse = await productService.getProducts();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu Errado');
  }
}

async function productRegister(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productService.create(req.body);
  return res.status(201).json(serviceResponse.data);
}
export default {
  productRegister,
  getProducts,
};

// const { name, price, orderId } = req.body;
//   const serviceResponse = await productService.create({
//     name, price, orderId,
//   });
// if (serviceResponse.status !== 'SUCCESSFUL') {
//   return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
// }
// return res.status(201).json(serviceResponse.data);
// }