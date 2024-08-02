import express from 'express';
import { SlotsController } from './slots.controller';

const router = express.Router();

router.post('/create-slots', SlotsController.createSlots);

router.get('/', SlotsController.getSlotAvailability);

export const SlotsRoutes = router;
