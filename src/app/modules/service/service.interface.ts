import { Model } from 'mongoose';

export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
  isDeleted: boolean;
};
export type TUserMethods = {
  serviceNotExists(name: string): Promise<TService | null>;
};
export type TServiceModel = Model<
  TService,
  Record<string, never>,
  TUserMethods
>;
