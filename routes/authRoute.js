import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isSeller, requireSignIn } from "../middleware/authMiddleware.js";

// Router object
const router = express.Router();

// Routing
// REGISTER || METHOD: POST
router.post("/register", registerController);
// lOGIN || METHOD: POST
router.post("/login", loginController);
router.get("/test", requireSignIn,isSeller, testController);

export default router;
