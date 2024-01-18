import Express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

//configure .env
dotenv.config();

// Connecting DATABASE
connectDB();

//rest object
const app = Express();

// middleware
app.use(Express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoute);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO E-COMMERCE APP.</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`.bgCyan.white);
});
