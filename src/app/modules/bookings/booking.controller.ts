import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBookingIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successfully!',
    data: result,
  });
});

//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjA5d2ViQHByb2dyYW1taW5nLWhlcm8uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI0MjcyOTcwLCJleHAiOjE3MjQ4Nzc3NzB9.1cQ7bIM9nePn2bMDPB7SiHYHJAYxY6jAPIepvvYhw0Y

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  console.log(req.user, 'user123   body');
  const result = await BookingServices.getAllBookingFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully !',
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
