/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from 'path';
import orderModel from '../order/order.model';
import { verifyPayment } from './payment.utils';
import { readFileSync } from 'fs';

const confirmationService = async (transactionId: string, status: string) => {
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
       // Success message
    message = 'Successfully Paid!';
  }
   else {
     // Failure message
    message = 'Payment Failed!';
  }

  const filePath = join(__dirname, '../../../../src/views/confirmation.html');
  let template = readFileSync(filePath, 'utf-8');
  template = template.replace('{{message}}', message);

  // return `<h1> Payment ${status} </h1>`;
  return template;
};
export const paymentServices = {
  confirmationService,
};
