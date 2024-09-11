import express, { Request, Response } from "express";
import {
  deleteAmenity,
  getAmenity,
  updateAmenity,
  getAmenities,
  createAmenity,
} from "../controllers/amenityController";

const amenityRoutes = express.Router();

// create new amenity
amenityRoutes.post("/", createAmenity);

// get all amenities
amenityRoutes.get("/", getAmenities);

// get amenity by id
amenityRoutes.get("/:d", getAmenity);

// update amenity
amenityRoutes.put("/id", updateAmenity);

// delete amenity
amenityRoutes.delete("/:id", deleteAmenity);

export default amenityRoutes;
