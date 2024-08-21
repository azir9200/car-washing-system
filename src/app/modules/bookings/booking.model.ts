import mongoose, { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new mongoose.Schema<TBooking>({
  // customer: {
  //   type: Schema.Types.ObjectId,
  //   required: [true, 'Customer id is required'],
  //   ref: 'customer',
  // },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'service',
  },
  slotId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'slot',
  },

  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true },
});

//creating a custom static method
BookingSchema.statics.isBookingExists = async function (id: string) {
  const existingBooking = await BookingModel.findOne({ id });
  return existingBooking;
};

export const BookingModel = model<TBooking>('booking', BookingSchema);
