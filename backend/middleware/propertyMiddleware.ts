import jwt, { JwtPayload } from "jsonwebtoken";
import Property from "../models/Property";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const isPropertyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const propertyId = req.params.id;
  console.log("property id is : ", propertyId);
  if (!propertyId) {
    res.status(400).json({ message: "Property ID is required" });
    return;
  }

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    if (!decoded) {
      return res.status(401).json({ error: "Access denied. Invalid token" });
    }
    const userId = decoded.userId;
    const property = await Property.findById(propertyId);
    console.log("middleware is owner ", property);
    if (!property) return res.status(404).json({ error: "Property not found" });

    if (property.owner.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ error: "Access denied. Not the property owner" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export default isPropertyOwner;
