import express from "express";
import {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController";
const reviewRouter = express.Router();

// get all reviews
reviewRouter.get("/", getReviews);

// get a review
reviewRouter.get("/:id", getReview);

// post new review
reviewRouter.post("/", createReview);

// put review
reviewRouter.put("/:id", updateReview);

// delete review
reviewRouter.delete("/:id", deleteReview);

export default reviewRouter;
