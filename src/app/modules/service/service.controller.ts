import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { ServiceServices } from './service.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is created successfully!',
    data: result,
  });
});

const getAllService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.getAllServiceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully !',
    data: result,
  });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceServices.getSingleServiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully',
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.updateServiceFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service  is updated successfully',
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  //  const data = req.body;
  const result = await ServiceServices.deleteServiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service  deleted successfully',
    // data: data,
    data: result,
  });
});

// COPY

export const createSlots = async (req: Request, res: Response) => {
  const { service, date, startTime, endTime } = req.body;

  try {
    const savedSlots = await ServiceServices.createSlotsIntoDB({
      service,
      date,
      startTime,
      endTime,
    });

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Slots created successfully',
      data: savedSlots,
    });
  } catch (err) {
    console.log(err);
  }
};

// copy
export const getAllAvailableSlots = async (req: Request, res: Response) => {
    const { date, serviceId } = req.query;

    try {
        const availableSlots = await ServiceServices.getAvailableSlotsFromDB({ date: date as string, serviceId: serviceId as string });

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Available slots retrieved successfully',
            data: availableSlots
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Error retrieving available slots',
            error: err.message
        });
    }
};


export const ServiceController = {
  createService,
  getAllService,
  getSingleService,
  deleteService,
  updateService,
  createSlots,
  getAllAvailableSlots,
};
