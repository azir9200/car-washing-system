import mongoose from "mongoose";

export type TReview = {
    userId: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
}
