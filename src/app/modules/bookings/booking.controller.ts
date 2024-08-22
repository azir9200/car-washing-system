import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  console.log(req.user, 'req.user.azir');
  const result = await BookingServices.createBookingIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successfully!',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  console.log(req.user, 'user123   body', req.headers, 'headers');
  const result = await BookingServices.getAllBookingFromDB();
  console.log('usersss', result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Booking retrieved successfully !',
    data: result,
  });
});

const getAllMyBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getMyBookingFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBookings,
  getAllMyBookings,
};
