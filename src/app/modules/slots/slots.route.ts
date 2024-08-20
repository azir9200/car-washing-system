import express from 'express';
import { SlotController } from './slots.controller';

const router = express.Router();

// Route to get available slots based on optional query parameters: date and serviceId
router.get('/availability', SlotController.getAvailableSlots);

export const SlotRoutes = router;
