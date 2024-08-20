import { SlotModel } from '../service/slots.model';

const getAvailableSlots = async (date?: string, serviceId?: string) => {
  const query: any = { isBooked: 'available' };

  if (date) {
    query.date = date;
  }

  if (serviceId) {
    query.service = serviceId;
  }

  // Populate the service details
  const slots = await SlotModel.find(query).populate('service');
  return slots;
};

export const SlotService = {
  getAvailableSlots,
};
