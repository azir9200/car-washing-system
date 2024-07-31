// import { TUser } from "./user.interface";
// import { UserModel } from "./user.model";

import { TService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceIntoDB = async (service: TService) => {
  const result = await ServiceModel.create(service);
  return result;
};

const getAllServicesFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await ServiceModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await ServiceModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  deleteServiceFromDB,
};
