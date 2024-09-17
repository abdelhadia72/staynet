import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  owner: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const PropertySchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    price: { type: Number, required: true, min: 0, max: 1000000 },
    location: { type: String, required: true, trim: true, maxlength: 200 },
    owner: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

PropertySchema.index({ location: 1 });

const Property = mongoose.model<IProperty>("Property", PropertySchema);
export default Property;
