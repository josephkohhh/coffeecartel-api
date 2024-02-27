/*
 * File: hashPassword.mjs
 * Author: Joseph Koh
 * Description: Responsible for hashing password using bcrypt
 */

import bcrypt from "bcrypt";

// Function to hash password
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.error("Error hashing password: ", error);
    throw new Error("Error hashing password");
  }
};
