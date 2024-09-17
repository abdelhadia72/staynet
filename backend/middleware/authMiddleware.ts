import jwt from "jsonwebtoken";
import Property from "../models/Property";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as jwt.JwtPayload;
    (req as any).user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export default verifyToken;
