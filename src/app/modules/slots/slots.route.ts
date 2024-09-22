import express from 'express';
import { SlotController } from './slots.controller'; // Adjust the path as necessary
import { SlotValidation } from './slots.validation'; // Adjust the path as necessary
import zodValidateRequest from '../../middlewares/zodValidateRequest';

const router = express.Router();

// Route to create slots
router.post(
  '/create',
  zodValidateRequest(SlotValidation.createSlotValidationSchema),
  SlotController.createSlots,
);

// Route to get available slots
router.get('/available', SlotController.getAvailableSlots);

export const SlotRoutes = router;

