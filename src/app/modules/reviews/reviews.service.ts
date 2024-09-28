import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TReview } from './reviews.interface';
import { ReviewModel } from './reviews.model';
import { User } from '../user/user.model';

const createReviewIntoDB = async (data: TReview) => {
  const { userId } = data;
  const findUser = await User.findById(userId);
  const result = await ReviewModel.create(findUser);
  return result;
};

const getAllReviewFromDB = async () => {
  const result = await ReviewModel.find();
  if (!result || result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const getSingleReviewFromDB = async (id: string) => {
  const result = await ReviewModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const updateReviewFromDB = async (id: string, payload: Partial<TReview>) => {
  const result = await ReviewModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const deleteReviewFromDB = async (id: string) => {
  const result = await ReviewModel.findOneAndUpdate({ id });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewFromDB,
  getSingleReviewFromDB,
  updateReviewFromDB,
  deleteReviewFromDB,
};
