import express from 'express';
import { authControllers } from './auth.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  zodValidateRequest(AuthValidation.signupValidationSchema),
  authControllers.register,
);
router.post(
  '/login',
  zodValidateRequest(AuthValidation.loginValidationSchema),
  authControllers.login,
);

export const AuthRoutes = router;
