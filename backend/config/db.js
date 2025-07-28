import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL);
    console.log(` MongoDb Connected: ${conn.connection.host} `.green.inverse);
  } catch (error) {
    console.log(` Error: ${error.message} `.red.inverse);
    process.exit(1);
  }
};

export default connectDB;
