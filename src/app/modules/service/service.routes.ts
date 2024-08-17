import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import { auth } from '../../middlewares/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_Role.ADMIN),
  zodValidateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get(
  '/',
  auth(USER_Role.ADMIN, USER_Role.USER),
  ServiceController.getAllService,
);

router.get('/:id', ServiceController.getSingleService);

router.put(
  '/:id',
  auth(USER_Role.ADMIN),
  zodValidateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceController.updateService,
);

router.delete('/:id', auth(USER_Role.ADMIN), ServiceController.deleteService);

router.post('/slots', ServiceController.createSlots);
router.get('/availability', ServiceController.getAllAvailableSlots);

export const ServiceRoutes = router;
