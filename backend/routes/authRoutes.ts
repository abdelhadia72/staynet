import express, { Request, Response } from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgetPassword,
  resetPassword,
  checkAuth,
} from "../controllers/authController";

import { verifyTokenAuth } from "../middleware/verifyTokenAuth";

const authRoutes = express.Router();

// check for the user
authRoutes.get("/check", verifyTokenAuth, checkAuth);

// Signup route
authRoutes.post("/signup", signup);

// login route
authRoutes.post("/login", login);

// logout route
authRoutes.post("/logout", logout);

// verify email
authRoutes.post("/verify-email", verifyEmail);

//forget password
authRoutes.post("/forgot-password", forgetPassword);

//reset passowrd
authRoutes.post("/reset-password/:token", resetPassword);

export default authRoutes;
