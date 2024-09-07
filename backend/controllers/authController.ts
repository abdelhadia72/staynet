import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import generateVerificationToken from "../utils/generateVerificationToken";
import { verificationTokenExpires } from "../utils/verificationTokenExpires";
import generateTokenAndSetCookie from "../utils/genrateTokenAndSetCookie";

// Signup route
const signup = async (req: Request, res: Response) => {
  const { email, password, name, role } = req.body;
  try {
    if (!email || !password || !name || !role) {
      throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const verificationToken = generateVerificationToken();
    const verificationExpiresToken = verificationTokenExpires();
    const newUser = new User({
      email,
      password: hashPassword,
      name,
      role,
      verificationToken: verificationToken,
      verificationTokenExpires: verificationExpiresToken,
    });

    await newUser.save();

    // jwt token
    generateTokenAndSetCookie(res, newUser.id);
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        ...newUser.toObject(),
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};

// login route
const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "login route" });
};

// Logout route
const logout = (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout route" });
};

export { signup, login, logout };
