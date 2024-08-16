import express from 'express';
import { UserControllers } from './user.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

// admin
router.post(
  '/create-admin',
  zodValidateRequest(UserValidation.createAdminValidationSchema),
  UserControllers.createAdmin,
);

//update
router.put(
  '/:userId',
  zodValidateRequest(UserValidation.createAdminValidationSchema),
  UserControllers.updateUser,
);

export const UserRoutes = router;
