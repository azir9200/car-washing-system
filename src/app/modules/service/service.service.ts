import httpStatus from 'http-status';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';
import AppError from '../../errors/handleAppError';

const createServiceIntoDB = async (data: TService) => {
  const service = new ServiceModel(data);
  if (await service.serviceNotExists(data.name)) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This service is already exists !',
    );
  }
  console.log(service, ' admin...signup');
  const result = await service.save();
  return result;
};

const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const existingService = await ServiceModel.find({ id });

  if (!existingService) {
    throw new Error('This Booking is already exists !');
    // throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
  }

  const result = await ServiceModel.findById(id);
  return result;
};

const updateServiceFromDB = async (id: string, payload: Partial<TService>) => {
  const result = await ServiceModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await ServiceModel.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  deleteServiceFromDB,
  updateServiceFromDB,
};
