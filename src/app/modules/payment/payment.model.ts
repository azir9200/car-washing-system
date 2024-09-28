

import mongoose, { model, Schema } from "mongoose";

const paymentSchema = new Schema<PaymentRequest>({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // productId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Product",
  //   required: true,
  // },
  price: {
    type: String,
    required: true,
  },
  //   currency: {
  //     type: String,
  //     default: 'usd',
  //   },
  // status: {
  //   type: String,
  //   enum: ["pending", "completed", "failed"],
  //   default: "pending",
  // },
  //   paymentIntentId: {
  //     type: String,
  //     required: true,
  //   },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});
export const PaymentModel = model<PaymentRequest>("Payment", paymentSchema);
