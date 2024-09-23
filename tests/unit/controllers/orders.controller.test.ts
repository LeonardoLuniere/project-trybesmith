import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderService from '../../../src/services/orders.Services';
import OrderController from '../../../src/controllers/orders.Controllers';
import { responseService, error, responseServiceError } from '../../mocks/mocks.Products';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa a busca por orders', async () => {
    sinon.stub(OrderService, 'getAllOrders').resolves(responseService as any);
    await OrderController.getAllOrders(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });
});
