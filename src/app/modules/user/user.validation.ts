import { z } from 'zod';

export const createAdminValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }).optional(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    phone: z.string().nonempty({ message: 'Phone number is required' }),
    address: z.string().nonempty({ message: 'Address is required' }),
  }),
});

const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const UserValidation = {
  createAdminValidationSchema,
  updateUserValidations,
};
