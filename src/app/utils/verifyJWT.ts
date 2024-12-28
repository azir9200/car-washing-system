// /* eslint-disable no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { USER_STATUS, UserRole } from '../modules/user/user.constant';
// import AppError from '../errors/handleAppError';

// export const createToken = (
//   jwtPayload: {
//     _id?: string;
//     name: string;
//     email: string;
//     mobileNumber?: string;
//     role: keyof typeof UserRole;
//     status: keyof typeof USER_STATUS;
//   },
//   secret: string,
//   expiresIn: string,
// ) => {
//   return jwt.sign(jwtPayload, secret, {
//     expiresIn,
//   });
// };

// export const verifyToken = (
//   token: string,
//   secret: string,
// ): JwtPayload | Error => {
//   try {
//     return jwt.verify(token, secret) as JwtPayload;
//   } catch (error: any) {
//     console.log(error);
//     throw new AppError(401, 'You are not authorized!');
//   }
// };
