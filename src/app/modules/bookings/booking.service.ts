import { TVehicleBooking } from './booking.interface';
import { vehicleBookingModel } from './booking.model';

const createBookingIntoDB = async (booking: TVehicleBooking) => {
  const result = (await vehicleBookingModel.create(booking)).populate(
    'service',
  );
  return result;
};

const getAllBookingFromDB = async () => {
  const result = await vehicleBookingModel
    .find()
    .populate('customer')
    .populate('service');
  // .populate('slots');
  return result;
};

const getMyBookingFromDB = async () => {
  const result = await vehicleBookingModel.find();
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
};
