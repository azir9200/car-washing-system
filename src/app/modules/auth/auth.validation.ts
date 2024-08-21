import { z } from 'zod';

export const signupValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password should be at least 6 characters long'),
    phone: z.string(),
    role: z.enum(['user', 'admin']),
    address: z.string().min(1, 'Address is required'),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  signupValidationSchema,
  loginValidationSchema,
};
