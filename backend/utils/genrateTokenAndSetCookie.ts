import jwt from "jsonwebtoken";
import { Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const generateTokenAndSetCookie = (res: Response, userId: string) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // XSS attack prevention
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // CSRF attack prevention
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });

  return token;
};

export default generateTokenAndSetCookie;
