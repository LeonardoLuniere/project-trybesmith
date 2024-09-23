import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import userModel from '../database/models/user.model';
import { User } from '../types/User';

async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<unknown> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token é obrigatório' });
  }

  try {
    const decoded = jwtUtil.verify(authorization) as unknown as User;
    const users = await userModel.findOne({ where: { username: decoded.username } });
    if (!users) return res.status(401).json({ message: 'Token inválido' });

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;