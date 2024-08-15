import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  zodValidateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);
export const AuthRoutes = router;
