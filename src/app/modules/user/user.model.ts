import { model, Schema } from 'mongoose';
import { TUser, TUserModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password cannot be more than 20 characters ! '],
  },
  phone: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], required: true },
  address: { type: String, required: true },
});

userSchema.methods.isUserExists = async function (email: string) {
  const existingUser = await UserModel.findOne({ email });
  return existingUser;
};
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  console.log('password hashed');
  next();
});

export const UserModel = model<TUser, TUserModel>('User', userSchema);
