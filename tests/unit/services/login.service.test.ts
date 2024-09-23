import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/mocks.Login';
import UserService from '../../../src/services/login.Services';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('ao não receber um userName, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.noUserName;
    const serviceResponse = await UserService.verifyLogin(parameters);

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });

  it('ao não receber um password, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.noPassword;
    const ServiceResponse = await UserService.verifyLogin(parameters);

    expect(ServiceResponse.status).to.eq('INVALID_DATA');
    expect(ServiceResponse.data).not.to.have.key('token');
    expect(ServiceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });

  it('ao passar userNAme invcalid, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.notExistingUser;
    const ServiceResponse = await UserService.verifyLogin(parameters);

    expect(ServiceResponse.status).to.eq('UNAUTHORIZED');
    expect(ServiceResponse.data).to.deep.eq({ message: 'Username or password invalid' });
  });
});
