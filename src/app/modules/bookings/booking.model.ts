import mongoose, { Schema, model } from 'mongoose';
import { TVehicleBooking } from './booking.interface';

const vehicleBookingSchema = new mongoose.Schema<TVehicleBooking>({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
  },
  // slot: { type: Schema.Types.ObjectId, ref: 'Slot' },
  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true },
});

vehicleBookingSchema.pre('save', async function (next) {
  const isBookingExists = await vehicleBookingModel.findOne({
    serviceId: this.service,
  });

  if (isBookingExists) {
    throw new Error('This Booking is already exists !');
  }
  next();
});

export const vehicleBookingModel = model<TVehicleBooking>(
  'Booking',
  vehicleBookingSchema,
);
