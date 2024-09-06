import express from "express";
import connectDB from "./db";
import dotenv from "dotenv";
import router from "./routes/propertyRoutes";

// load the envs
dotenv.config();

// create the express app
const app = express();
app.use(express.json());
const port = process.env.SERVER_PORT || 3000;

// connect to the database
connectDB();

// create router
app.use("/api/properties", router);

app.listen(port, () => {
  console.log(`connected check http://localhost:${port}`);
});
