// src/models/VehicleBooking.ts
import { Schema, model, Document } from 'mongoose';
import { TVehicleBooking } from './booking.interface';


// Extend Mongoose's Document interface with your IVehicleBooking interface
interface IVehicleBookingModel extends TVehicleBooking, Document {}

const vehicleBookingSchema = new Schema<IVehicleBookingModel>({
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    slotId: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },
    vehicleType: { type: String, required: true },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true }
});

const VehicleBooking = model<IVehicleBookingModel>('VehicleBooking', vehicleBookingSchema);

export default VehicleBooking;
