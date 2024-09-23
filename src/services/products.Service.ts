import ProductModel, {
  ProductSequelizeModel,
  ProductInputtableTypes,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
  
async function create(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  // let responseService: ServiceResponse<Product>;
  
  const newProduct = await ProductModel.create(product);
  const { orderId, ...response } = newProduct.dataValues;
  return { status: 'SUCCESSFUL', data: response };
}
async function getProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}
export default {
  getProducts,
  create,
};