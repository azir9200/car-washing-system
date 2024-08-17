import httpStatus from 'http-status';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';
import AppError from '../../errors/handleAppError';
import SlotModel from './slots.model';

const createServiceIntoDB = async (data: TService) => {
  const service = new ServiceModel(data);
  if (await ServiceModel.isServiceExists(data.name)) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This service is already exists , AZIR!',
    );
  }
  const result = await service.save();
  return result;
};

const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const notService = await ServiceModel.find({ id });

  if (!notService) {
    throw new Error('This Booking is already exists !');
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
  const result = await ServiceModel.findOneAndUpdate({ _id: id });
  return result;
};
interface CreateSlotsInput {
  service: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const createSlotsIntoDB = async ({
  service,
  date,
  startTime,
  endTime,
}: CreateSlotsInput) => {
  const startHour = parseInt(startTime.split(':')[0]);
  const endHour = parseInt(endTime.split(':')[0]);

  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    const slot = new SlotModel({
      service,
      date,
      startTime: `${hour.toString().padStart(2, '0')}:00`,
      endTime: `${(hour + 1).toString().padStart(2, '0')}:00`,
    });
    slots.push(slot);
  }

  return await SlotModel.insertMany(slots);
};

//  Available  slots

interface GetSlotsInput {
    date?: string;
    serviceId?: string;
}

export const getAvailableSlotsFromDB = async ({ date, serviceId }: GetSlotsInput) => {
    const query: any = { isBooked: 'available' };
    if (date) {
        query.date = date;
    }

    if (serviceId) {
        query.service = serviceId;
    }

    return await SlotModel.find(query).populate('service');
};


export const ServiceServices = {
  createServiceIntoDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  deleteServiceFromDB,
  updateServiceFromDB,
  createSlotsIntoDB,
  getAvailableSlotsFromDB,
};
