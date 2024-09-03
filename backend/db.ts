import monogoose from "mongoose";
import dotenv from "dotenv";

// load the envs
dotenv.config();
const connectDB = async () => {
  try {
    await monogoose.connect(process.env.MONGO_URL || "");
    console.log("MongoDb connected successfully!");
  } catch (e) {
    console.error("MongoDb Error: ", e);
    process.exit(1);
  }
};

export default connectDB;
