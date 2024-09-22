import mongoose, { model, Schema} from "mongoose";
import { TReview } from "./reviews.interface";

const ReviewSchema = new Schema<TReview> ({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
},{
    timestamps: true,
  },);

export const ReviewModel = model<TReview>("Review", ReviewSchema);
