import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { SlotsServices } from './slots.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSlots = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SlotsServices.createSlotsIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Slots is created successfully!',
      data: result,
    });
  },
);

const getSlotAvailability = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotsServices.slotAvailabilityFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully !',
    data: result,
  });
});

export const SlotsController = {
    createSlots,
    getSlotAvailability,
};
