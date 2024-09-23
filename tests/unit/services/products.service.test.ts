import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductModel from '../../../src/database/models/product.model';
import { createProduct, responseProduct, responseService, mockProductsAll } from '../../mocks/mocks.Products';
import ProductService from '../../../src/services/products.Service';

chai.use(sinonChai);

describe('ProductsService', function () {
  const req = {} as Request;
  const res = {} as Response;
  const creationFalidProduct = 'INVALID_DATA';
  const aprovedProduct = 'SUCCESSFUL';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa retorno da função', async () => {
    sinon.stub(ProductModel, 'create').resolves(responseProduct);

    const response = await ProductService.create(createProduct);
    expect(response).to.deep.equal(responseService);

  })
  it('Testa a função getProducts', async () => {
    const mock = mockProductsAll.map((product) => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(mock);

    const response = await ProductService.getProducts();
    expect(response.data).to.deep.equal(mock);
  });
});
