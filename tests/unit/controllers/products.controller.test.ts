import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductController from '../../../src/controllers/products.Controllers';
import ProductService from '../../../src/services/products.Service';
import { createProduct, 
  responseService, 
  responseServiceError, 
  error, createProductError } from '../../mocks/mocks.Products';

chai.use(sinonChai);

describe('ProductsControllers', function () {
  const req = {} as Request;
  const res = {} as Response;
  const creationFalidProduct = 'INVALID_DATA';
  const aprovedProduct = 'SUCCESSFUL';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa a Criação de um novo product', async () => {
    req.body = createProduct;
    sinon.stub(ProductService, 'create').resolves(responseService as any);
    await ProductController.productRegister(req, res);
    expect(res.status).to.have.been.calledWith(201);
  })

// Req 2
  it('Testa a busca por products', async () => {
    sinon.stub(ProductService, 'getProducts').resolves(responseService as any);
    await ProductController.getProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });
});
