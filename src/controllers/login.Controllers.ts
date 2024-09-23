import { Request, Response } from 'express';
import loginService from '../services/login.Services';
import StatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response) {
  try {
    const serviceResponse = await loginService.verifyLogin(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(StatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu Errado');
  }
}

export default {
  login,
};