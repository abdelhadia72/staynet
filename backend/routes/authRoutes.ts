import express, { Request, Response } from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
} from "../controllers/authController";

const authRoutes = express.Router();

// Signup route
authRoutes.post("/signup", signup);

// login route
authRoutes.post("/login", login);

// Logout route
authRoutes.post("/logout", logout);

authRoutes.post("/verify-email", verifyEmail);

export default authRoutes;
