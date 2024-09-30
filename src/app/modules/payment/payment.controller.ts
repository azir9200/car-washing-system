import { Request, Response } from 'express';
import { paymentServices } from './payment.service';

const confirmationController = async (req: Request, res: Response) => {
  const { transactionId, status } = req.query;
  const result = await paymentServices.confirmationService(
    transactionId as string,
    status as string,
  );
  res.send(result);
};
export const paymentController = {
  confirmationController,
};

// {   res.send(req.query.transactionId);
//   const result = await paymentServices.confirmationService(
//     req.query.transactionId as string,
//     req.query.status as string,
//   );
//    res.send(result)
//   //  res.redirect();
//   };
