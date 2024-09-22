/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/handleAppError';
import { UserRole } from '../modules/user/user.constant';

export const auth = (...requiredRoles: (keyof typeof UserRole)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.header('Authorization')?.replace('Bearer ', '');

    if (!accessToken) {
      throw new AppError(401, 'You have no access to this route');
    }

    const verifiedToken = jwt.verify(
      accessToken as string,
      config.jwt_access_secret as string,
    );

    const { role, email } = verifiedToken as JwtPayload;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(401, 'User not found');
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You have no access to this route');
    }
    req.user = verifiedToken as JwtPayload;
    next();
    return user;
  });
};
