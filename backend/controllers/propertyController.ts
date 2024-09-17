import { Request, Response } from "express";
import Property from "../models/Property";

// Get all propertyes
const getProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't find any property",
    });
  }
};

//Get a propety
const getProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found !" });
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
    const newProperty = new Property(req.body);
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
      },
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Can't find the Property" });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't Update the property",
    });
  }
};

const deleteProperty = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("this is the id", id);
  try {
    const propertyDeleted = await Property.findByIdAndDelete(id);
    if (!propertyDeleted) {
      return res.status(404).json({ message: "No property found (01)" });
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
