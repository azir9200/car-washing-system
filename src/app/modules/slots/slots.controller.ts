import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { SlotService } from './slots.service';

const createSlots = catchAsync(async (req: Request, res: Response) => {
  const { service, startTime, endTime } = req.body;
  const date = new Date(req.body.date);

  const result = await SlotService.createSlotsIntoDB(
    service,
    date,
    startTime,
    endTime,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotService.getAvailableSlots();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const SlotController = {
  getAvailableSlots,
  createSlots,
};
