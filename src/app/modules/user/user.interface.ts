import { Types } from 'mongoose';
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  name: string;
  booking: Types.ObjectId;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};


export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  //deleted
  isUserDeleted(id: string): Promise<TUser>;
  // blocked
  isUserBlocked(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;