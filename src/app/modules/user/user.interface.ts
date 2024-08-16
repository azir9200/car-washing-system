import { Model } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { USER_Role } from './user.constant';

export type TUser = {
  name: string;
  // booking: Types.ObjectId;
  email: string;
  password: string;
  phone: string;
  role: keyof typeof USER_Role;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  //deleted
  isUserDeleted(id: string): Promise<TUser>;
}
