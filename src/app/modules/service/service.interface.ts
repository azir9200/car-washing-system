import { Model } from 'mongoose';

export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
};

export interface TServiceModel extends Model<TService> {
  isServiceExists(id: string): Promise<TService>;
}
