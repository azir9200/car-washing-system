/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/handleAppError';
import { UserRole } from '../modules/user/user.constant';
import { verifyToken } from '../modules/auth/auth.utils';

export const auth = (...requiredRoles: (keyof typeof UserRole)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    console.log('access auth', token);

    if (!token) {
      throw new AppError(401, 'Unauthorized ,You have no access to this route');
    }

    const decoded = verifyToken(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role, email, iat } = decoded;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(401, 'User not found');
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You have no access to this route');
    }
    req.user = decoded as JwtPayload;
    next();
    return user;
  });
};
