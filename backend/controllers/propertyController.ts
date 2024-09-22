import { Request, Response } from "express";
import Property from "../models/Property";
import jwt, { JwtPayload } from "jsonwebtoken";

// Get all properties
const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't find any properties",
    });
  }
};

// Get a property
const getProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found!" });
    }
    return res.status(200).json(property);
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't find the property",
    });
  }
};

// Create new property
const createProperty = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const userId = decoded.userId;
    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const newProperty = new Property({
      ...req.body,
      owner: userId,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

// Update the property
const updateProperty = async (req: Request, res: Response) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't update the property",
    });
  }
};

const deleteProperty = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const propertyDeleted = await Property.findByIdAndDelete(id);
    if (!propertyDeleted) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't delete the property",
    });
  }
};

export {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
  deleteProperty,
};
