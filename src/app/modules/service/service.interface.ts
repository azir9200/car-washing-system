import { Model } from 'mongoose';

export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
};


export interface TServiceModel extends Model<TService> {
  //instance methods for checking if the user exist
  isServiceExists(id: string): Promise<TService>;
}
