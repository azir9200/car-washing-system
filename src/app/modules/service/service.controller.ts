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
    message: 'Service is retrieved successfully',
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
  const result = await ServiceServices.deleteServiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is deleted successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllService,
  getSingleService,
  deleteService,
  updateService,
};
