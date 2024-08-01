import express from 'express';
import { ServiceControllers } from './service.controller';

const router = express.Router();

router.post('/create-services', ServiceControllers.createService);

router.get('/', ServiceControllers.getAllServices);

router.get('/:id', ServiceControllers.getSingleService);

router.delete('/:id', ServiceControllers.deleteService);

export const ServiceRoutes = router;
