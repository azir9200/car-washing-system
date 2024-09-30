/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '../../config';

export const initiatePayment = async (paymentData: any) => {
  const response = await axios.post(config.payment_url!, {
    store_id: config.store_id,
    signature_key: config.signature_key,
    tran_id: paymentData.transactionId,
    // success     --todo
    success_url: `https://backend-deply-project.vercel.app/api/payment/confirmation/success?transactionId=${paymentData.transactionId}`,
    fail_url: `https://backend-deply-project.vercel.app/api/payment/confirmation/failed`,
    // success_url: `http://localhost:5000/api/payment/confirmation/success?transactionId=${paymentData.transactionId}`,
    // fail_url: `http://localhost:5000/api/payment/confirmation/failed`,
    cancel_url: 'http://localhost:5173/',
    amount: paymentData.totalPrice,
    currency: 'BDT',
    desc: 'Merchant Registration Payment',
    cus_name: paymentData.customerName,
    cus_email: paymentData.customerEmail,
    cus_add1: paymentData.customerAddress,
    cus_add2: 'N/A',
    cus_city: 'N/A',
    cus_state: 'N/A',
    cus_postcode: 'N/A',
    cus_country: 'N/A',
    cus_phone: paymentData.customerPhone,
    type: 'json',
  });
  //  console.log("Response", response);
  return response.data;
};

export const verifyPayment = async (tnxId: string) => {
  const response = await axios.get(config.payment_verify_url!, {
    params: {
      store_id: config.store_id,
      signature_key: config.signature_key,
      type: 'json',
      request_id: tnxId,
    },
  });
  return response.data;
  // return
};
