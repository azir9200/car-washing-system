import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { USER_Role } from '../modules/user/user.constant';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/handleAppError';

export const auth = (...requiredRoles: (keyof typeof USER_Role)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //  const accessToken = req.headers.authorization;
    const accessToken = req.header('Authorization')?.replace('Bearer ', '');
    console.log(accessToken, 'acccessTokennnnnnn');

    if (!accessToken) {
      throw new AppError(
        401,
        'You are not authorized to access this route, no token ',
      );
    }

    const verfiedToken = jwt.verify(
      accessToken as string,
      config.jwt_access_secret as string,
    );

    const { role, email } = verfiedToken as JwtPayload;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(401, 'User not found');
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You are not authorized to access this route');
    }

    next();
  });
};
