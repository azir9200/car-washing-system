import express from 'express';
import { UserControllers } from './user.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { ServiceValidation } from '../service/service.validation';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/signup',
  zodValidateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createSignup,
);

router.post(
  '/login',
  zodValidateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createLogin,
);

// router.get("/", UserControllers.getAllUser);

router.delete('/:id', UserControllers.getSingleUser);

router.get('/:id', UserControllers.getSingleUser);

export const UserRoutes = router;
