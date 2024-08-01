import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true },
  address: { type: String, required: true },
});

// academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isDepartmentExist = await AcademicDepartment.findOne(query);

//   if (!isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This department does not exist! ',
//     );
//   }

//   next();
// });


export const UserModel = model<TUser>("User", userSchema);
