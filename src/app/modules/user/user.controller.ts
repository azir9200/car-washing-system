import { Request, Response } from 'express';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSignup = catchAsync(async (req: Request, res: Response) => {
  const { user: signupData } = req.body;
  const result = await UserServices.createSignupIntoDB(signupData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully !',
    data: result,
  });
});

const createLogin = catchAsync(async (req: Request, res: Response) => {
  const { user: userData } = req.body;
  const result = await UserServices.createSignupIntoDB(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully !',
    data: result,
  });
});

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: 'User are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const result = await UserServices.getSingleUserFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createSignup,
  createLogin,
  getAllUser,
  getSingleUser,
};
