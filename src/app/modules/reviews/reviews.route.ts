import express from 'express';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { auth } from '../../middlewares/auth';
import { ReviewValidation } from './reviews.zodValidation';
import { ReviewController } from './reviews.controller';

const router = express.Router();

router.post(
  '/create',
  zodValidateRequest(ReviewValidation.createReviewValidationSchema),
  ReviewController.createReview,
);

router.get('/', ReviewController.getAllReview);

router.get('/:id', ReviewController.getSingleReview);

router.put(
  '/:id',
  auth('admin'),
  zodValidateRequest(ReviewValidation.createReviewValidationSchema),
  ReviewController.updateReview,
);

router.delete('/:id', auth('admin'), ReviewController.deleteReview);

export const ReviewRoutes = router;
