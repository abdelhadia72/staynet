import express, { Request, Response } from "express";
import {
  createProperty,
  getProperties,
  getProperty,
  updateProperty,
  deleteProperty,
  searchProperties,
} from "../controllers/propertyController";

import isPropertyOwner from "../middleware/propertyMiddleware";
import verifyToken from "../middleware/authMiddleware";
import { verifyTokenAuth } from "../middleware/verifyTokenAuth";

const propertyRouter = express.Router();

// search properties
propertyRouter.get("/search", searchProperties);

// get all properties
propertyRouter.get("/", getProperties);

// get property by id
propertyRouter.get("/:id", getProperty);

// create new property
propertyRouter.post("/", verifyTokenAuth, createProperty);

// update property
propertyRouter.put(
  "/:id",
  (req: Request, res: Response) => {
    updateProperty(req, res);
  },
  verifyTokenAuth,
  isPropertyOwner,
);

propertyRouter.delete("/:id", verifyTokenAuth, isPropertyOwner, deleteProperty);

// delete property
// ADD ME
export default propertyRouter;
