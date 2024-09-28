import mongoose, { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new mongoose.Schema<TBooking>({
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'service',
  },
  slotId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'slot',
  },
  // userId: {
  //   type: Schema.Types.ObjectId, // Include userId to track who made the booking
  //   required: true,
  //   ref: 'User',
  // },

  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  date: { type: String },
});

//creating a custom static method
BookingSchema.statics.isBookingExists = async function (id: string) {
  const existingBooking = await BookingModel.findOne({ id });
  return existingBooking;
};

export const BookingModel = model<TBooking>('booking', BookingSchema);
