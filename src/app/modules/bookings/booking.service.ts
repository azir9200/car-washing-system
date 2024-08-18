import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (booking: TBooking) => {
  const result = (await BookingModel.create(booking)).populate([
    { path: 'Customer' },
    { path: 'Service' },
    { path: 'Slot' },
  ]);

  // const createdBooking = await BookingModel.create(booking);

  // // Populate the necessary fields
  // const result = await (
  //   await (await createdBooking.populate('service')).populate('customer')
  // ).populate('slot');

  return result;
};

const getAllBookingFromDB = async () => {
  const result = await BookingModel.find()
    .populate('Customer')
    .populate('Service')
    .populate('Slot');
  return result;
};

const getMyBookingFromDB = async () => {
  const result = await BookingModel.find();
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
};
