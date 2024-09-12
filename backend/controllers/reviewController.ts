import { Request, Response } from "express";
import Review from "../models/Review";

// get all reviews
const getReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews = await Review.find({});
    if (!reviews || reviews.length === 0) {
      res.status(404).json({ message: "No reviews found" });
      return;
    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching the reviews", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get single review
const getReview = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      res.status(404).json({ message: "Review not found" });
      return;
    }
    res.status(200).json(review);
  } catch (error) {
    console.error("Error fetching single review", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// create review
const createReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error creating new review", error);
    res.status(500).json({ message: "Can't create new review" });
  }
};

// update review
const updateReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedReview) {
      res.status(404).json({ message: "Review not found" });
      return;
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    console.error("Error while updating review", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete review
const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      res.status(404).json({ message: "Review not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Review deleted successfully", deletedReview });
  } catch (error) {
    console.error("Error while deleting the review", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getReview, getReviews, createReview, updateReview, deleteReview };
