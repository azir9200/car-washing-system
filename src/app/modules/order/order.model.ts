import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  bookings: Array<{
    booking: mongoose.Schema.Types.ObjectId;
  }>;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  transactionId: string;
}

const OrderSchema: Schema = new Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    bookings: [
      {
        booking: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'booking',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending',
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IOrder>('Order', OrderSchema);
