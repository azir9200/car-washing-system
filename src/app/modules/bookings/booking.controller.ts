import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';
import { JwtPayload } from 'jsonwebtoken';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const user: JwtPayload = req.user;
  const result = await BookingServices.createBookingIntoDB(user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successfully!',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getAllBookingFromDB();

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
const getSingleBookings = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('booking con', id);
  const result = await BookingServices.getSingleBookingById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' bookings retrieved successfully',
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBookings,
  getAllMyBookings,
  getSingleBookings,
};
