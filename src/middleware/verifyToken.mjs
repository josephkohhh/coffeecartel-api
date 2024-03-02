/*
 * File: verifyToken.mjs
 * Author: Joseph Koh
 * Description: Responsible for authentication of JWT
 */

import jwt from "jsonwebtoken";

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  // Check if token is present
  if (!token) return res.status(403).json({ msg: "Token not provided" });

  // Verify token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err)
      return res.status(401).json({ msg: "Failed to authenticate token" });

    // If token is valid, save decoded token to request for future use
    req.decoded = decoded;
    next();
  });
};
