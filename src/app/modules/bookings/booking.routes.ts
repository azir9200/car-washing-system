import express from 'express';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';
import zodValidateRequest from '../../middlewares/zodValidateRequest';

const router = express.Router();

router.post(
  '/create',

  zodValidateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking,
);

router.get('/', BookingController.getAllBookings);
router.get('/booking/my-bookings', BookingController.getAllMyBookings);

export const BookingRoutes = router;
