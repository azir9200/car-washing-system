import { z } from 'zod';

// Create service validation schema
export const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: 'Service name is required' }),
    description: z.string().nonempty({ message: 'Description is required' }),
    price: z
      .number()
      .nonnegative({ message: 'Price must be a non-negative number' }),
    duration: z
      .number()
      .positive({ message: 'Duration must be a positive number' }),
    image: z.string().url({ message: 'Image must be a valid URL' }),
    isDeleted: z.boolean().optional(),
  }),
});

// Update service validation schema
export const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty({ message: 'Service name is required' })
      .optional(),
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
    image: z.string().url({ message: 'Image must be a valid URL' }).optional(),
    isDeleted: z.boolean().optional(), // Optional in updates as well
  }),
});

// Export validation object
export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
