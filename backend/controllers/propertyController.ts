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
const searchProperties = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) - 1 || 0;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";
    const sort = (req.query.sort as string) || "price";
    const location = (req.query.location as string) || "";
    const type = (req.query.type as string) || "";
    const status = (req.query.status as string) || "";
    const country = (req.query.country as string) || "";
    const city = (req.query.city as string) || "";

    const query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (location) query.location = { $regex: location, $options: "i" };
    if (type) query.property_type = type;
    if (status) query.status = status;
    if (country) query.country = { $regex: country, $options: "i" };
    if (city) query.city = { $regex: city, $options: "i" };

    const total = await Property.countDocuments(query);
    const properties = await Property.find(query)
      .sort({ [sort]: 1 })
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      properties,
      totalPages: Math.ceil(total / limit),
      currentPage: page + 1,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Can't find any properties",
    });
  }
};

export {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
  deleteProperty,
  searchProperties,
};
