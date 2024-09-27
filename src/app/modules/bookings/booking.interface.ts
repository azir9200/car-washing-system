import { Model, Types } from 'mongoose';

export type TBooking = {
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  // userId: Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  date: Date;
};
export interface BookingModelModel extends Model<TBooking> {
  isUserExists(id: string): Promise<TBooking | null>;
}
