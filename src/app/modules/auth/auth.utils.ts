import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import AppError from '../../errors/handleAppError';

export const createToken = (
  jwtPayload: { email: string; role: string | undefined },
  secret: Secret,
  expiresIn: string | number,  // Expiration can be a string or a number
): string => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,  // 'expiresIn' should be either string or number like '1h'
  });
};

// You can leave verifyToken as is, no need for changes.
export const verifyToken = (
  token: string,
  secret: Secret,
): JwtPayload | Error => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    console.log(error);
    throw new AppError(401, 'You are not authorized!');
  }
};
