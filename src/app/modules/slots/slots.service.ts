import { convertMinutesToTime, parseTimeToMinutes } from './slot.util';
import { TSlot } from './slots.interface';
import { SlotModel } from './slots.model';

const createSlotsIntoDB = async (slotData: TSlot) => {
  const { service, date, startTime, endTime } = slotData;

  const serviceDuration = 60;
  // Convert start and end times to minutes
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  // Calculate the total duration
  const totalDuration = endMinutes - startMinutes;

  // Calculate the number of slots
  const numberOfSlots = totalDuration / serviceDuration;
  // Generate slots
  const slots: TSlot[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = convertMinutesToTime(
      startMinutes + i * serviceDuration,
    );
    const slotEndTime = convertMinutesToTime(
      startMinutes + (i + 1) * serviceDuration,
    );

    const newSlot = new SlotModel({
      service,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    });
    slots.push(await newSlot.save());
  }
  return slots;
};

const getAvailableSlots = async (date?: string, serviceId?: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  createSlotsIntoDB,
  getAvailableSlots,
};