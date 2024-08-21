import express from 'express';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { auth } from '../../middlewares/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  //auth(USER_Role.admin),
  zodValidateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking,
);

router.get(
  '/',
  // auth(USER_Role.admin, USER_Role.user, ),
  BookingController.getAllBookings,
);

router.get(
  '/my-bookings',
  auth(USER_Role.admin),
  BookingController.getAllMyBookings,
);

export const BookingRoutes = router;
