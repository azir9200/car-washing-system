import { Types } from 'mongoose';

export type TVehicleBooking = {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  // slot: Types.ObjectId;

  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
