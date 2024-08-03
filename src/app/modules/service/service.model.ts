import mongoose, { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const createServiceSchema = new mongoose.Schema<TService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

createServiceSchema.pre('save', async function (next) {
  const isServiceExists = await ServiceModel.findOne({
    name: this.name,
  });

  if (isServiceExists) {
    throw new Error('This service is already exists !');
  }
  next();
});

export const ServiceModel = model<TService>('Service', createServiceSchema);
