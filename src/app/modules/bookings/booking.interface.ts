import { Model, Types } from 'mongoose';

export type TBooking = {
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;

  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  date: string;
};
export interface BookingModelModel extends Model<TBooking> {
  isUserExists(id: string): Promise<TBooking | null>;
}