import mongoose, { Schema, Document } from "mongoose";

export interface IAmenity extends Document {
  title: string;
  description: string;
  icons: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const AmenitySchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    icon: { type: String, required: true, trim: true, maxlength: 100 },
  },
  {
    timestamps: true,
  },
);

AmenitySchema.index({ title: 1 });

const Amenity = mongoose.model<IAmenity>("Amenity", AmenitySchema);
export default Amenity;
