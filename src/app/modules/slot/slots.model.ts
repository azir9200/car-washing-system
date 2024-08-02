import mongoose, { model, Schema } from 'mongoose';
import { TServiceSlots } from './slots.interface';

const ServiceSlotsSchema = new mongoose.Schema<TServiceSlots>(
  {
    service: { type: String, required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const ServiceSlotsModel = model<TServiceSlots>(
  'Slot',
  ServiceSlotsSchema,
);
