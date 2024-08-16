import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
import { USER_Role } from './user.constant';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    // booking: { type: Schema.Types.ObjectId, ref: 'Booking' },
    email: { type: String, required: true },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'Password cannot be more than 20 characters ! '],
    },
    phone: { type: String, required: true },
    role: {
      type: String,
      required: [true, 'Role is required'],
      enum: Object.keys(USER_Role),
    },
    // role: { type: String, enum: ['user', 'admin'], required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.isUserExists = async function (email: string) {
  const existingUser = await User.findOne({ email });
  return existingUser;
};
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser, UserModel>('User', userSchema);
