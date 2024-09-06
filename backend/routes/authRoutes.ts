import express, { Request, Response } from "express";
import { signup, login, logout } from "../controllers/authController";

const authRoutes = express.Router();

// Signup route
authRoutes.get("/signup", (req: Request, res: Response) => {
  console.log("Let's do this ");
  res.status(200).json({ message: "Signup route" });
});

// login route
authRoutes.get("/login", (req: Request, res: Response) => {
  res.status(200).json({ message: "login route" });
});

// Logout route
authRoutes.get("/logout", (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout route" });
});

export default authRoutes;
