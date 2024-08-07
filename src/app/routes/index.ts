import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { SlotsRoutes } from '../modules/slot/slots.route';
import { BookingRoutes } from '../modules/bookings/booking.routes';
import { ServiceRoutes } from '../modules/service/service.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/services',
    route: SlotsRoutes,
  },
  {
    path: '/slots',
    route: SlotsRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
