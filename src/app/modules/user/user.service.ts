import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createSignupIntoDB = async (payload: TUser) => {
  const isAdminExists = await UserModel.findOne({ email: payload.email });
  if (isAdminExists) {
    throw new Error('This admin already Exists !');
  }
  const result = await UserModel.create(payload);
  return result;
};
const createLoginIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await UserModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createSignupIntoDB,
  createLoginIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
};
