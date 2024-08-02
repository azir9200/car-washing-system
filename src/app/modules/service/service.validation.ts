import { z } from 'zod';

export const createServiceValidationSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string().nonempty({ message: 'Name is required' }),
      description: z.string().nonempty({ message: 'Description is required' }),
      price: z
        .number()
        .nonnegative({ message: 'Price must be a non-negative number' }),
      duration: z
        .number()
        .positive({ message: 'Duration must be a positive number' }),
      isDeleted: z.boolean().default(false),
    }),
  }),
});

export const updateServiceValidationSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string().nonempty({ message: 'Name is required' }).optional(),
      description: z
        .string()
        .nonempty({ message: 'Description is required' })
        .optional(),
      price: z
        .number()
        .nonnegative({ message: 'Price must be a non-negative number' })
        .optional(),
      duration: z
        .number()
        .positive({ message: 'Duration must be a positive number' })
        .optional(),
      isDeleted: z.boolean().default(false).optional(),
    }),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};

