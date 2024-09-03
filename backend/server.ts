import express from "express";
import connectDB from "./db";
import dotenv from "dotenv";

// load the envs
dotenv.config();

// create the express app
const app = express();
const port = process.env.SERVER_PORT || 3000;

// connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send("Typescript getting right let's goo");
});

app.listen(port, () => {
  console.log(`connected check http://localhost:${port}`);
});
