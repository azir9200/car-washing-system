import mongoose, { Schema, model, Document } from 'mongoose';
import { TVehicleBooking } from './booking.interface';

const vehicleBookingSchema = new mongoose.Schema<TVehicleBooking>({
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  slotId: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },
  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true },
});

export const vehicleBookingModel = model<TVehicleBooking>(
  'Booking',
  vehicleBookingSchema,
);
