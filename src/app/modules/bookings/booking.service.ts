/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';
import { JwtPayload } from 'jsonwebtoken';

const createBookingIntoDB = async (user: JwtPayload, booking: TBooking) => {
  const userInfo = { user, ...booking };
  // const result = await BookingModel.create(userInfo);
  const result = (await BookingModel.create(userInfo)).populate([
    { path: 'serviceId' },
    { path: 'slotId' },
  ]);

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await BookingModel.find()
    .populate('serviceId')
    .populate('slotId');
  if (!result || result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const getMyBookingFromDB = async () => {
  const result = await BookingModel.find();
  if (!result || result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }

  return result;
};

const getSingleBookingById = async (bookingId: any) => {
  const result = await BookingModel.find({ _id: bookingId });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
  getSingleBookingById,
};