import { z } from 'zod';

export const createBookingValidationSchema = z.object({
  body: z.object({
   
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.string().min(1, 'Vehicle type is required'),
    vehicleBrand: z.string().min(1, 'Vehicle brand is required'),
    vehicleModel: z.string().min(1, 'Vehicle model is required'),
    date: z.string(),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
