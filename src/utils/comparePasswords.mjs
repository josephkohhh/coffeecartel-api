/*
 * File: comparePasswords.mjs
 * Author: Joseph Koh
 * Description: Responsible for comparing password using bcrypt
 */

import bcrypt from "bcrypt";

// Function to compare passwords
export const comparePasswords = async (hashedPassword, password) => {
  try {
    return await bcrypt.compare(password, hashedPassword); // Use bcrypt to compare passwords
  } catch (error) {
    console.error("Error validating password:", error.message);
    throw error;
  }
};
