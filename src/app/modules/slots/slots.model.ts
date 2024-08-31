import { model, Schema } from 'mongoose';
import { TSlot } from './slots.interface';

export const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: [true, 'Service id is required'],
      ref: 'service',
    },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const SlotModel = model<TSlot>('slot', slotSchema);

