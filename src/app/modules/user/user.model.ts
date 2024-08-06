import { model, Schema } from 'mongoose';
import { TUser, TUserModel } from './user.interface';
import AppError from '../../errors/handleAppError';
import httpStatus from 'http-status';

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], required: true },
  address: { type: String, required: true },
});

// userSchema.pre('save', async function (next) {
//   const isDepartmentExist = await UserModel.findById({
//     id: this._id,
//   });

//   if (isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This department is already exist!',
//     );
//   }

//   next();
// });

userSchema.methods.isUserExists = async function (_id: string) {
  const existingUser = await UserModel.findOne({ _id });
  return existingUser;
};

export const UserModel = model<TUser, TUserModel>('User', userSchema);
