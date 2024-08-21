import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (booking: TBooking) => {
  const result = (await BookingModel.create(booking)).populate([
    { path: 'serviceId' },
    { path: 'slotId' },
  ]);

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await BookingModel.find()
     .populate('customer')
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

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
};
