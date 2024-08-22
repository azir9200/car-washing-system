import express from 'express';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('user'),
  zodValidateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking,
);

router.get('/', auth('admin', 'user'), BookingController.getAllBookings);

export const BookingRoutes = router;
