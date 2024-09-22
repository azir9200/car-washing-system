import { Types } from 'mongoose';

export type TSlot = {
  service: Types.ObjectId;
  booked: boolean;
  date: Date;
  startTime: string;
  endTime: string;
};
