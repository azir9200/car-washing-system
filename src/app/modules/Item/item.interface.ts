/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectId } from 'mongoose';
import { DISTRICTS, ITEM_STATUS } from './item.constant';


type District = (typeof DISTRICTS)[number];

export type TItem = {
  title: string;
  description: string;
  image?: string[];
  city: District;
  location: string;
  dateFound: Date;
  status: keyof typeof ITEM_STATUS;
  isReported?: boolean;
  reportCount?: number;
  user: ObjectId;
  category: ObjectId;
  questions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
