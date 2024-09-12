import { Request, Response } from "express";
import Amenity from "../models/Amenity";

// Get all amenities
const getAmenities = async (req: Request, res: Response): Promise<void> => {
  try {
    const amenities = await Amenity.find({});
    if (!amenities || amenities.length === 0) {
      res.status(404).json({ message: "No amenities found" });
      return;
    }
    res.status(200).json(amenities);
  } catch (error) {
    console.error("Error fetching amenities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get amenity
const getAmenity = async (req: Request, res: Response): Promise<void> => {
  try {
    const amenityId = req.params.id; // Assuming the ID is passed as a route parameter
    if (!amenityId) {
      res.status(400).json({ message: "Amenity ID is required" });
      return;
    }

    const amenity = await Amenity.findById(amenityId);
    if (!amenity) {
      res.status(404).json({ message: "Amenity not found" });
      return;
    }

    res.status(200).json(amenity);
  } catch (error) {
    console.error("Error fetching single amenity:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// create new amenity
const createAmenity = async (req: Request, res: Response): Promise<void> => {
  try {
    const newAmenity = new Amenity(req.body);
    const saveAmenity = await newAmenity.save();
    if (!saveAmenity) {
      res.status(404).json({ message: "Can't add this amenity m" });
      return;
    }
    res.status(200).json(saveAmenity);
  } catch (error) {
    console.log("Error while creating the amenity", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update amenity
const updateAmenity = async (req: Request, res: Response): Promise<void> => {
  try {
    const UAmenity = await Amenity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!UAmenity) {
      res.status(404).json({ message: "can't find the Amenity" });
      return;
    }
    res.status(200).json(UAmenity);
  } catch (error) {
    console.log("Error while update the amenity", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// delete amenity
const deleteAmenity = async (req: Request, res: Response): Promise<void> => {
  try {
    const amenityId = req.params.id;
    if (!amenityId) {
      res.status(400).json({ message: "Amenity ID is required" });
      return;
    }

    const amenity = await Amenity.findByIdAndDelete(amenityId);
    if (!amenity) {
      res.status(404).json({ message: "Amenity not found" });
      return;
    }

    res.status(200).json({ message: "Amenity deleted successfully", amenity });
  } catch (error) {
    console.error("Error while deleting the amenity:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  createAmenity,
  getAmenity,
  updateAmenity,
  getAmenities,
  deleteAmenity,
};
