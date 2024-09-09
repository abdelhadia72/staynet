import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import generateVerificationToken from "../utils/generateVerificationToken";
import { verificationTokenExpires } from "../utils/verificationTokenExpires";
import generateTokenAndSetCookie from "../utils/genrateTokenAndSetCookie";
import { sendVerificationEmail, sendWelcomeEmail } from "../mail/sendEmail";

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

    // send verfationemail
    sendVerificationEmail(newUser.email, newUser.verificationToken);

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
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials." });
    }

    // check if password valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials." });
    }

    // generate token
    generateTokenAndSetCookie(res, user.id);
    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Error from login", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
};

// Logout route
const logout = (req: Request, res: Response) => {
  // clear cookie
  res.clearCookie("token");
  res.status(200).json({ message: "logout successfully" });
};

const verifyEmail = async (req: Request, res: Response) => {
  // remove me
  console.log("Entire request body:", req.body);
  const { code } = req.body;
  if (!code) {
    return res
      .status(400)
      .json({ success: false, message: "Verification code is required" });
  }
  // remove me
  console.log("The code is", code);
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      success: true,
      message: "Welcome email sent successfully",
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export { signup, login, logout, verifyEmail };
