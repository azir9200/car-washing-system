import { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>(
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

serviceSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
serviceSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

serviceSchema.statics.isServiceExists = async function (id: string) {
  return await ServiceModel.findOne({ id });
};

export const ServiceModel = model<TService>('service', serviceSchema);
