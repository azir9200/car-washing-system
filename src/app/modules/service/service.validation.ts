import { z } from "zod";

export const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    price: z
      .number()
      .nonnegative({ message: "Price must be a non-negative number" }),
    duration: z
      .number()
      .positive({ message: "Duration must be a positive number" }),
    isDeleted: z.boolean().default(false),
  }),
});

export const serviceValidation = {
  createServiceValidationSchema,
};
