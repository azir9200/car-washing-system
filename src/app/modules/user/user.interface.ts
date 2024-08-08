import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TUserMethods = {
  isUserExists(email: string): Promise<TUser | null>;
};
export type TUserModel = Model<TUser, Record<string, never>, TUserMethods>;
