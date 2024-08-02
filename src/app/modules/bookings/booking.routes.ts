import express from 'express';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post('/create-booking', BookingController.createBooking);

router.get('/', BookingController.getAllBookings);

router.get('/my-bookings', BookingController.getAllMyBookings);

export const BookingRoutes = router;
