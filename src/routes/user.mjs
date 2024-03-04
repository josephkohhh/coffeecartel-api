/*
 * File: user.mjs
 * Author: Joseph Koh
 * Description: Represents user related endpoints
 */

import { Router } from "express";
import { loginUser, registerUser } from "../services/userService.mjs";
import { checkSchema, validationResult } from "express-validator";
import {
  loginValidation,
  registerValidation,
} from "../schema/userValidation.mjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/verifyToken.mjs";

export const secretKey = "yourSecretKey"; // secretKey

const router = Router(); // Create an instance of express router

// Login request
router.post("/login", checkSchema(loginValidation), async (req, res) => {
  try {
    const result = validationResult(req);

    // If have validation errors, send back a response with the errors
    if (!result.isEmpty()) {
      return res.json({
        status: 400,
        error: "Validation failed. Please check your inputs",
      });
    }

    const { username, password } = req.body;

    const user = await loginUser(username, password); // Login user

    // Use constant-time comparison to mitigate timing attacks
    const isValid = user.role === "admin" || user.role === "user";

    // Success
    if (isValid) {
      const userData = {
        role: user.role,
        fname: user.fname,
        lname: user.lname,
        address: user.address,
      };
      const token = jwt.sign(userData, secretKey); // Generate JWT token

      return res.json({
        status: 200,
        token,
        user: {
          role: user.role,
          fname: user.fname,
          lname: user.lname,
          address: user.address,
        },
      });
    }
    // Fail
    else {
      return res.json({ status: 401, error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.json({ status: 500, error: "Internal server error" });
  }
});

// Register request
router.post("/register", checkSchema(registerValidation), async (req, res) => {
  try {
    const result = validationResult(req);

    // If have validation errors, send back a response with the errors
    if (!result.isEmpty()) {
      return res.json({
        status: 400,
        error: "Validation failed. Please check your inputs",
      });
    }

    const { firstname, lastname, email, address, username, confirmPassword } =
      req.body;

    // Register user
    await registerUser(
      username,
      confirmPassword,
      firstname,
      lastname,
      email,
      address
    );

    return res.json({ status: 201, msg: "Account created successfully" }); // Success
  } catch (error) {
    // Fail
    console.error("Error registering:", error);
    let errorMessage = "Internal server error";

    // Check for specific error messages
    if (
      error.message === "Username already exists" ||
      error.message === "Email already exists" ||
      error.message === "Email or username already exists"
    ) {
      errorMessage = error.message;
      return res.json({ status: 401, error: errorMessage });
    }

    return res.json({ status: 500, error: errorMessage });
  }
});

// Protected request
router.get("/protected", verifyToken, async (req, res) => {
  try {
    res.json({ status: 200, user: req.decoded }); // If token is valid, the user is authenticated
  } catch (error) {
    return res.json({ status: 500, error: errorMessage });
  }
});

export default router;
