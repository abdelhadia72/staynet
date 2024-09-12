import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  reviewer: mongoose.Types.ObjectId;
  property: mongoose.Types.ObjectId;
  host: mongoose.Types.ObjectId;
  booking: mongoose.Types.ObjectId;
  overallRating: number;
  comment: string;
  images: string[];
}

export const ReviewSchema = new Schema(
  {
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // booking: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Booking",
    //   required: true,
    // },
    overallRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

ReviewSchema.index({ reviewer: 1, property: 1 });

const Review = mongoose.model<IReview>("Review", ReviewSchema);
export default Review;
