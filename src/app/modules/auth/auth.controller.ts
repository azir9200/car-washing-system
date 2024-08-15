import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  console.log(result, 'auth controller');

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Auth(user) login successfully !',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
