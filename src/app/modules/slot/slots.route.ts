import express from 'express';
import { SlotsController } from './slots.controller';

const router = express.Router();

router.post('/slots', SlotsController.createSlots);

router.get('/availability', SlotsController.getSlotAvailability);

export const SlotsRoutes = router;

