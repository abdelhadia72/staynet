import jwt from "jsonwebtoken";
import Property from "../models/Property";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const isPropertyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ error: "Property not found (auth)" });
    const { id } = req.body;
    if (property.owner.toString() !== id) {
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
