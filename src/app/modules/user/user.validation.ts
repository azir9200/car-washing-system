import {  z } from 'zod';
import { USER_Role } from './user.constant';

export const createAdminValidationSchema = z.object({
  body: z.object({
      name: z.string().nonempty({ message: 'Name is required' }),
      // booking: z.string(),
      email: z.string().email({ message: 'Invalid email address' }).optional(),
      password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),
      phone: z.string().nonempty({ message: 'Phone number is required' }),
    //  role: z.enum(['user', 'admin'], {
     //   message: "Role must be either 'user' or 'admin'",    }),
       role: z.nativeEnum(USER_Role).default(USER_Role.ADMIN),
      address: z.string().nonempty({ message: 'Address is required' }),
    }),

});


const updateUserValidations = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    phone: z.string().optional(),
   address: z.string().optional(),
  }),
});



export const UserValidation = {
  createAdminValidationSchema,
  updateUserValidations
};
