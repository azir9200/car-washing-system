/* eslint-disable @typescript-eslint/no-explicit-any */

import { initiatePayment } from '../payment/payment.utils';
import orderModel from './order.model';

const createOrder = async (orderData: any) => {
  const { user, service } = orderData;

  // eslint-disable-next-line prefer-const
  const totalPrice = service.price;

  // Calculate the total price
  //   const bookingDetails = await Promise.all(
  //     products.map(async (item: any) => {
  //       const booking = await BookingModel.findById(item.booking);
  //       if (booking) {

  //         return {
  //           product: booking._id,

  //         };
  //       } else {
  //         throw new Error("Product not found");
  //       }
  //     })
  //   );

  const transactionId = `TXN-${Date.now()}`;

  const order = new orderModel({
    user,
    service,
    totalPrice,
    status: 'Pending',
    paymentStatus: 'Pending',
    transactionId,
  });

  await order.save();

  const paymentData = {
    transactionId,
    totalPrice: order.totalPrice,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone,
    customerAddress: user.address,
  };

  //payment
  const paymentSession = await initiatePayment(paymentData);

  console.log('payment Session, order service', paymentSession);
  return paymentSession;
};

export const orderService = {
  createOrder,
};
