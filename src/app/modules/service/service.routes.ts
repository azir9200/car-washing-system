import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import { auth } from '../../middlewares/auth';
import { SlotController } from '../slots/slots.controller';
import { SlotValidation } from '../slots/slots.validation';

const router = express.Router();

router.post(
  '/',
  auth('admin', ),
  zodValidateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get('/', ServiceController.getAllService);

router.get('/:id', ServiceController.getSingleService);

router.put(
  '/:id',
  auth('admin'),
  zodValidateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceController.updateService,
);

router.delete('/:id',  auth('admin'), ServiceController.deleteService);

router.post(
  '/slots',
  auth('admin'),
  zodValidateRequest(SlotValidation.createSlotValidationSchema),
  SlotController.createSlots,
);


export const ServiceRoutes = router;
