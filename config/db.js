import mongoose from "mongoose";
import  Color  from "colors";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error Connecting to Database ${error}`.bgRed.white);
  }
};

export default connectDB;
