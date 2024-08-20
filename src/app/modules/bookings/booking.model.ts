import mongoose, { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new mongoose.Schema<TBooking>({

  customer: {
    type: Schema.Types.ObjectId,
    required: [true, 'Customer id is required'],
    ref: 'customer',
  },
  service: {
    type: Schema.Types.ObjectId,
    required: [true, 'Service id is required'],
    ref: 'service',
  },
  slot: {
    type: Schema.Types.ObjectId,
    required: [true, 'Slot  id is required'],
    unique: true,
    ref: 'slot',
  },

  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true },
});

BookingSchema.pre('save', async function (next) {
  const isBookingExists = await BookingModel.findOne({
    serviceId: this.service,
  });

  if (isBookingExists) {
    throw new Error('This Booking is already exists !');
  }
  next();
});

export const BookingModel = model<TBooking>('booking', BookingSchema);
