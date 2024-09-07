import express, { Request, Response } from "express";
import { signup, login, logout } from "../controllers/authController";

const authRoutes = express.Router();

// Signup route
authRoutes.post("/signup", signup);

// login route
authRoutes.get("/login", (req: Request, res: Response) => {
  res.status(200).json({ message: "login route" });
});

// Logout route
authRoutes.get("/logout", (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout route" });
});

export default authRoutes;
