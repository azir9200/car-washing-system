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

createServiceSchema.methods.serviceNotExists = async function (name: string,) {
  const existingService = await ServiceModel.findOne({ name});
  return existingService;
};


createServiceSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
createServiceSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
createServiceSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const ServiceModel = model<TService, TServiceModel>(
  'Service',
  createServiceSchema,
);
