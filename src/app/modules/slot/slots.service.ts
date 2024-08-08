
import { ServiceModel } from '../service/service.model';
import { TServiceSlots } from './slots.interface';
import { ServiceSlotsModel } from './slots.model';

const createSlotsIntoDB = async (slots: TServiceSlots) => {
  const result = await ServiceSlotsModel.create(slots);
  return result;
};

const slotAvailabilityFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};

export const SlotsServices = {
  createSlotsIntoDB,
  slotAvailabilityFromDB,
};
