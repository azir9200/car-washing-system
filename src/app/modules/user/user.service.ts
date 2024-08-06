import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createSignupIntoDB = async (signup: TUser) => {
  // const result = await UserModel.create(signup);
  const admin = new UserModel(signup); //create an instance
  if (await admin.isUserExists(signup.id)) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department is already exist!',
    );
  }
  console.log(admin, ' admin...signup');
  const result = await admin.save();
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
