/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from 'path';
import orderModel from '../order/order.model';
import { verifyPayment } from './payment.utils';
import { readFileSync } from 'fs';

const confirmationService = async (transactionId: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  
  let result;
  let message = '';

  if (verifyResponse && verifyResponse.pay_status === 'Successful') {
      // Update order as paid
    result = await orderModel.findOneAndUpdate(
      { transactionId },
      {
        paymentStatus: 'Paid',
      },
    );
    return result;
    //    // Success message
    // message = 'Successfully Paid!';
  }
   else {
     // Failure message
    message = 'Payment Failed!';
  }
};
export const paymentServices = {
  confirmationService,
};
