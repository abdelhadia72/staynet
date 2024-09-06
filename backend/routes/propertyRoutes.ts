import express, { Request, Response, NextFunction } from "express";
import {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
} from "../controllers/propertyController";

const router = express.Router();

// create new property
router.post("/", createProperty);

// get property by id
router.get("/:id", getProperty);

// get all properties
router.get("/", getProperties);

// update property
router.put("/:id", (req: Request, res: Response) => {
  updateProperty(req, res);
});

export default router;
