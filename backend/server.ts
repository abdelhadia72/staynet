import express from "express";
import connectDB from "./db";
import dotenv from "dotenv";
import cors from "cors";
import propertyRouter from "./routes/propertyRoutes";
import authRoutes from "./routes/authRoutes";

// load the envs
dotenv.config();

// create the express app
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.SERVER_PORT || 3000;

// connect to the database
connectDB();

// auth router
app.use("/api/auth", authRoutes);

// property router
app.use("/api/properties", propertyRouter);

app.listen(port, () => {
  console.log(`connected check http://localhost:${port}`);
});
