import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth(),
  zodValidateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get('/', ServiceController.getAllService);

router.get('/:id', ServiceController.getSingleService);

//  router.put('/:id', ServiceController.updateService);
router.put(
  '/:id',
  zodValidateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceController.updateService,
);

router.delete('/:id', ServiceController.deleteService);

export const ServiceRoutes = router;
