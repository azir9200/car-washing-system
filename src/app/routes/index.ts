import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { BookingRoutes } from '../modules/bookings/booking.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { AuthRoutes } from '../modules/auth/auth.router';
import { SlotRoutes } from '../modules/slots/slots.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
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
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
