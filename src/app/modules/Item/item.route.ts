import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { ItemControllers } from './item.controller';
import { ItemValidation } from './item.validation';
import auth from '../../middlewares/auth';


const router = express.Router();

router.post(
  '/',
  // auth(USER_ROLE.ADMIN),
  validateRequest(ItemValidation.createItemValidationSchema),
  ItemControllers.createItem
);

router.get('/', ItemControllers.getAllItems);

router.get('/:id', ItemControllers.getItem);

router.put(
  '/:id',
  auth(USER_ROLE.USER),
  validateRequest(ItemValidation.updateItemValidationSchema),
  ItemControllers.updateItem
);

router.delete('/:id', auth(USER_ROLE.USER), ItemControllers.deleteItem);

export const ItemRoutes = router;
