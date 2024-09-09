import express, { Request, Response } from "express";
import {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
} from "../controllers/propertyController";

const propertyRouter = express.Router();

// get all properties
propertyRouter.get("/", getProperties);

// get property by id
propertyRouter.get("/:id", getProperty);

// create new property
propertyRouter.post("/", createProperty);

// update property
propertyRouter.put("/:id", (req: Request, res: Response) => {
  updateProperty(req, res);
});

// delete property
// ADD ME
export default propertyRouter;
