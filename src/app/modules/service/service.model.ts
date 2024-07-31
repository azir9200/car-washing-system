import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const createServiceSchema = new Schema<TService>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  isDeleted: { type: Boolean, required: true, default: false },
});

export const ServiceModel = model<TService>("Service", createServiceSchema);
