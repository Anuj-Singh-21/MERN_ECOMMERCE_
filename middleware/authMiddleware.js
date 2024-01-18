import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token based
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Invalid Token",
    });
  }
};

// Seller Access

export const isSeller = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== "seller") {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin Middleware",
    });
  }
};
