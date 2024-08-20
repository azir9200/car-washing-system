import mongoose from 'mongoose';
import { TService, TSlot } from './service.interface';
import { ServiceModel } from './service.model';
import { convertMinutesToTime, parseTimeToMinutes } from './service.utils';
import { SlotModel } from './slots.model';

const createServiceIntoDB = async (data: TService) => {
  const result = await ServiceModel.create(data);
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

//  const createSlotsIntoDB = async (slotData: TSlot) => {
//   const { service, date, startTime, endTime } = slotData;
//   const startHour = parseInt(startTime.split(':')[0]);
//   const endHour = parseInt(endTime.split(':')[0]);

//   const slots = [];
//   for (let hour = startHour; hour < endHour; hour++) {
//     const slot = new SlotModel({
//       service,
//       date,
//       startTime: `${hour.toString().padStart(2, '0')}:00`,
//       endTime: `${(hour + 1).toString().padStart(2, '0')}:00`,
//     });
//     slots.push(slot);
//   }

//   return await SlotModel.insertMany(slots);
// };

// duplicate again

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
    console.log(slotEndTime, 'slotend  time');

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
//  const getAvailableSlotsFromDB = async (
//   service: mongoose.Types.ObjectId,
// ) => {
//   return await SlotModel.find(service).populate('service');
// };
const getAvailableSlotsFromDB = async () => {
  const result = await SlotModel.find();
  return result;
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
