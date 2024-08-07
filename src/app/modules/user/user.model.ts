import { model, Schema } from 'mongoose';
import { TUser, TUserModel } from './user.interface';

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], required: true },
  address: { type: String, required: true },
});


userSchema.methods.isUserExists = async function (email: string) {
  const existingUser = await UserModel.findOne({ email });
  return existingUser;
};

export const UserModel = model<TUser, TUserModel>('User', userSchema);
