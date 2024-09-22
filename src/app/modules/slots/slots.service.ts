import httpStatus from 'http-status';
import AppError from '../../errors/handleAppError';
import { TSlot } from './slots.interface';
import { SlotModel } from './slots.model';

const SERVICE_DURATION = 60; // Service duration in minutes

export const generateSlots = (
  serviceId: string,
  date: Date,
  startTime: string,
  endTime: string,
) => {
  const slots: TSlot[] = [];

  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  const totalDuration = endMinutes - startMinutes; // Total duration in minutes
  const numberOfSlots = totalDuration / SERVICE_DURATION; // Number of slots

  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = minutesToTime(startMinutes + i * SERVICE_DURATION);
    const slotEndTime = minutesToTime(
      startMinutes + (i + 1) * SERVICE_DURATION,
    );

    slots.push({
      service: serviceId,
      booked: false,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    });
  }

  return slots;
};

const parseTimeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

const createSlotsIntoDB = async (
  serviceId: string,
  date: Date,
  startTime: string,
  endTime: string,
) => {
  const slots = generateSlots(serviceId, date, startTime, endTime);
  await SlotModel.insertMany(slots);
  return slots;
};

const getAvailableSlots = async () => {
  const slots = await SlotModel.find().populate('service');
  if (!slots || slots.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found !');
  }

  return slots;
};

export const SlotService = {
  createSlotsIntoDB,
  getAvailableSlots,
};
