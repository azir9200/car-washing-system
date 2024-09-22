import { model, Schema } from 'mongoose';
import { TSlot } from './slots.interface';
import mongoose from 'mongoose';

export const slotSchema = new Schema<TSlot>(
  {
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    booked: { type: Boolean, default: false },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const SlotModel = model<TSlot>('slot', slotSchema);
