import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
};

export interface TUserMethod {
  isUserExists(id: string): Promise<TUser | null>;
}
export type TUserModel = Model<TUser, Record<string, never>, TUserMethod>;

// for creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods >;