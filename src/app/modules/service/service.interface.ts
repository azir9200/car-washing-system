
export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
  isDeleted: boolean;
};

export type TSlots = {
  service: string;
  date: string;
  startTime: string;
  endTime: string;
}


// export interface TServiceModel extends Model<TService> {
//   //instance methods for checking if the user exist
//   isServiceExists(id: string): Promise<TService>;
 
// }

