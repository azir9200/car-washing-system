/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (data: TService) => {
  try {
    const result = await ServiceModel.create(data);
    return result;
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create service.');
  }
};

const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  if (!result || result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await ServiceModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const updateServiceFromDB = async (id: string, payload: Partial<TService>) => {
  const result = await ServiceModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await ServiceModel.findOneAndUpdate({ id });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  deleteServiceFromDB,
  updateServiceFromDB,
};
