import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (booking: TBooking) => {
  const result = (await BookingModel.create(booking)).populate([
    { path: 'customer' },
    { path: 'service' },
    { path: 'slot' },
  ]);

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await BookingModel.find()
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

const getMyBookingFromDB = async () => {
  const result = await BookingModel.find()
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
};
