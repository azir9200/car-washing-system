import { Request, Response } from 'express';
import { paymentServices } from './payment.service';

const confirmationController = async (req: Request, res: Response) => {
  const { transactionId } = req.query;
  await paymentServices.confirmationService(transactionId as string);
  res.redirect('https://car-wash-client-five.vercel.app/payment/success');
  // res.send(result);
};

const confirmationFailed = async (req: Request, res: Response) => {
  res.redirect('https://car-wash-client-five.vercel.app/payment/failed');
};
export const paymentController = {
  confirmationController,
  confirmationFailed,
};
