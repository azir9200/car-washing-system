import { z } from 'zod';

export const createReviewValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1),
  }),
});
export const ReviewValidation = {
  createReviewValidationSchema,
};
