import { Model, Types } from 'mongoose';

export type TBooking = {
  //customer: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;

  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
export interface BookingModelModel extends Model<TBooking> {
  isUserExists(id: string): Promise<TBooking | null>;
}
