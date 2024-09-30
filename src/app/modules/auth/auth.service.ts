/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
// import AppError from "../../errors/appError";
// import { userModel } from "../user/user.model";
import { TUserLogin } from "./auth.interface";
import config from "../../config";
import { createToken,} from "./auth.utils";
import bcrypt from "bcrypt";
import AppError from "../../errors/handleAppError";
import { User } from "../user/user.model";

const loginUser = async (payload: TUserLogin) => {
  try {
    const user = await 
      User.findOne({ email: payload.email })
      .select("+password");
    if (!user) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "This user does not exist!",
        "Unauthorized access request!"
      );
    }

    const isPasswordMatched = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!isPasswordMatched) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Invalid password",
        "Unauthorized Access"
      );
    }

    const jwtPayload = { email: user.email, role: user.role };
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string
    );
    // const refreshToken = createToken(
    //   jwtPayload,
    //   config. as string,
    //   // config.jwt_refresh_expires_in as string
    // );

    return { accessToken };
  } catch (error: any) {
    // console.error("Error in loginUser:", error); // Log the error
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "An error occurred while logging in"
    );
  }
};


export const authServices = {
  loginUser,
 
};
