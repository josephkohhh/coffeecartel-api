/*
 * File: verifyToken.mjs
 * Author: Joseph Koh
 * Description: Responsible for authentication of JWT
 */

import jwt from "jsonwebtoken";

import { secretKey } from "../routes/user.mjs";

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  // If undefined
  if (!bearerHeader) return res.status(403).json({ msg: "Token not provided" });

  // If not start with "Bearer"
  if (!bearerHeader.startsWith("Bearer "))
    return res.status(403).json({ msg: "Invalid token format" });

  // Extract and verify token
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  jwt.verify(token, secretKey, (error, decoded) => {
    if (error)
      return res.status(403).json({ msg: "Failed to authenticate token" });

    // If token is valid, save decoded token to request for future use
    req.decoded = decoded;

    next();
  });
};
