import express from 'express';
import { SlotController } from './slots.controller';

const router = express.Router();


router.get('/availability',  SlotController.getAvailableSlots);

export const SlotRoutes = router;
