import express, { Request, Response } from "express";
import {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
} from "../controllers/propertyController";

const propertyRouter = express.Router();

// create new property
propertyRouter.post("/", createProperty);

// get property by id
propertyRouter.get("/:id", getProperty);

// get all properties
propertyRouter.get("/", getProperties);

// update property
propertyRouter.put("/:id", (req: Request, res: Response) => {
  updateProperty(req, res);
});

export default propertyRouter;
