import { Schema, model } from 'mongoose';
import { TService, TServiceModel } from './service.interface';

const createServiceSchema = new Schema<TService>(
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

createServiceSchema.methods.serviceNotExists = async function (name: string) {
  const existingService = await ServiceModel.findOne({ name });
  return existingService;
};

export const ServiceModel = model<TService, TServiceModel>(
  'Service',
  createServiceSchema,
);
