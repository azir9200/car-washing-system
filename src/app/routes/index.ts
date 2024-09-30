import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { BookingRoutes } from '../modules/bookings/booking.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { SlotRoutes } from '../modules/slots/slots.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';
import { orderRoutes } from '../modules/order/order.route';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { authRoutes } from '../modules/auth/auth.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/order',
    route: orderRoutes,
  },
  {
    path: '/my-bookings',
    route: BookingRoutes,
  },
  {
    path: '/slot',
    route: SlotRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
