import { z } from 'zod';

export const createAdminValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      name: z.string().nonempty({ message: 'Name is required' }),
      // booking: z.string(),
      email: z.string().email({ message: 'Invalid email address' }).optional(),
      password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),
      phone: z.string().nonempty({ message: 'Phone number is required' }),
      role: z.enum(['user', 'admin'], {
        message: "Role must be either 'user' or 'admin'",
      }),
      address: z.string().nonempty({ message: 'Address is required' }),
    }),
  }),
});

export const UserValidation = {
  createAdminValidationSchema,
};
