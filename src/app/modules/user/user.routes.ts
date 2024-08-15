import express from 'express';
import { UserControllers } from './user.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

// admin
router.post(
  "/create-admin",
  zodValidateRequest(UserValidation.createAdminValidationSchema),
  UserControllers.
)

// router.post(
//   '/signup',
//   zodValidateRequest(UserValidation.createUserValidationSchema),
//   UserControllers.createSignup,
// );

router.post(
  '/login',
  zodValidateRequest(UserValidation.createAdminValidationSchema),
  UserControllers.createLogin,
);

router.delete('/:id', UserControllers.getSingleUser);

router.get('/:id', UserControllers.getSingleUser);

router.get('/', UserControllers.getAllUser);

export const UserRoutes = router;
