import mongoose, { Schema, Document } from "mongoose";
import { title } from "process";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  isVerified?: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  verificationToken?: string;
  verificationTokenExpires?: Date;
}

export const UserSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, maxlength: 100 },
  password: { type: String, required: true, trim: true, maxlength: 100 },
  role: { type: String, required: true, trim: true, maxlength: 100 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  resetPasswordToken: { type: String, default: "" },
  resetPasswordExpires: { type: Date, default: Date.now },
  verificationToken: { type: String, default: "" },
  verificationTokenExpires: { type: Date, default: Date.now },
});

UserSchema.index({ email: 1 });

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
