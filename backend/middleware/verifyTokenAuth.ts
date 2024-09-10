import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  userId?: string;
}

export const verifyTokenAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.cookies.token;
  try {
    if (!token) {
      console.log(token);
      res.status(401).json({ message: "Unauthorized: no token provided" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.userId = decoded.userId;

    if (!decoded) {
      res.status(401).json({ message: "Unauthorized: invalid token" });
      return;
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An unknown error occurred" });
  }
};
