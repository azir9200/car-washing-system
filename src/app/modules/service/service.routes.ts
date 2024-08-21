import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import { auth } from '../../middlewares/auth';
import { USER_Role } from '../user/user.constant';
import { SlotController } from '../slots/slots.controller';
import { SlotValidation } from '../slots/slots.validation';

const router = express.Router();

router.post(
  '/',
  auth(USER_Role.admin),
  zodValidateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get('/', ServiceController.getAllService);

router.get('/:id', ServiceController.getSingleService);

router.put(
  '/:id',
  auth(USER_Role.admin),
  zodValidateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceController.updateService,
);

router.delete('/:id', auth(USER_Role.admin), ServiceController.deleteService);

router.post(
  '/slots',
  auth(USER_Role.admin),
  zodValidateRequest(SlotValidation.createSlotValidationSchema),
  SlotController.createSlots,
);

// router.get('/availability', ServiceController.getAllAvailableSlots);

export const ServiceRoutes = router;
