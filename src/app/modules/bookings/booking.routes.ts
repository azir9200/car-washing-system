import express from 'express';
import { BookingController } from './booking.controller';
import { USER_Role } from '../user/user.constant';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth(USER_Role.admin), BookingController.createBooking);

router.get('/', auth(USER_Role.admin, USER_Role.user, ), BookingController.getAllBookings);

router.get('/my-bookings', BookingController.getAllMyBookings);

export const BookingRoutes = router;
