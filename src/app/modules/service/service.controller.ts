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
    message: 'Service  created successfully!',
    data: result,
  });
});

const getAllService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.getAllServiceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved successfully !',
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
    message: 'Service updated successfully',
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

// const createSlots = catchAsync(async (req: Request, res: Response) => {
//   const result = await ServiceServices.createSlotsIntoDB(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Slots created successfully',
//     data: result,
//   });
// });

// const getAllAvailableSlots = catchAsync(async (req: Request, res: Response) => {
//   console.log(req.body, 'req,boy');
//   // const { service } = req.body;
//   const result = await ServiceServices.getAvailableSlotsFromDB();
//   console.log(result, 'result. reeere');

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Available slots retrieved successfully',
//     data: result,
//   });
// });

export const ServiceController = {
  createService,
  getAllService,
  getSingleService,
  deleteService,
  updateService,
  // getAllAvailableSlots,
};
