import mongoose, { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new mongoose.Schema<TBooking>({
  // customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  // service: { type: Schema.Types.ObjectId, ref: 'Service' },
  // slot: { type: Schema.Types.ObjectId, ref: 'Slot' },
  customer: {
    type: Schema.Types.ObjectId,
    required: [true, 'User= customer id is required'],
    unique: true,
    ref: 'Customer',
  },
  service: {
    type: Schema.Types.ObjectId,
    required: [true, 'User1= service id is required'],
    unique: true,
    ref: 'Service',
  },
  slot: {
    type: Schema.Types.ObjectId,
    required: [true, 'User2=slot  id is required'],
    unique: true,
    ref: 'Slot',
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

export const BookingModel = model<TBooking>('Booking', BookingSchema);
