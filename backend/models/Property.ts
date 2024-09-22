import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  property_type: {
    type: String;
    enum: ["apartment", "villa", "house", "apartment", "condo", "land"];
    required: true;
  };
  status: {
    type: String;
    enum: ["for_sale", "for_rent", "sold", "rented"];
    required: true;
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: String;
  city: String;
  country: String;
  zip_code: String;
  owner_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const PropertySchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    price: { type: Number, required: true, min: 0, max: 1000000 },
    location: { type: String, required: true, trim: true, maxlength: 200 },
    owner_id: { type: String, required: true },
    property_type: {
      type: String,
      enum: ["apartment", "villa", "house", "apartment", "condo", "land"],
      required: true,
    },
    status: {
      type: String,
      enum: ["for_sale", "for_rent", "sold", "rented"],
      required: true,
    },
    bedrooms: { type: Number, required: true, min: 1, max: 20 },
    bathrooms: { type: Number, required: true, min: 1, max: 10 },
    area: { type: Number, required: true, min: 1 },
    address: { type: String, required: true, trim: true, maxlength: 200 },
    city: { type: String, required: true, trim: true, maxlength: 100 },
    country: { type: String, required: true, trim: true, maxlength: 100 },
    zip_code: { type: String, required: true, trim: true, maxlength: 20 },
  },
  {
    timestamps: true,
  },
);

PropertySchema.index({ location: 1 });

const Property = mongoose.model<IProperty>("Property", PropertySchema);
export default Property;
