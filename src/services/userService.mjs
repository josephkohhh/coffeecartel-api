/*
 * File: userService.mjs
 * Author: Joseph Koh
 * Description: Responsible for managing users
 */

import { hashPassword } from "../utils/hashPassword.mjs";
import { comparePasswords } from "../utils/comparePasswords.mjs";
import { UserModel } from "../models/userModel.mjs";

// Function to register user
export const registerUser = async (
  username,
  password,
  fname,
  lname,
  email,
  address
) => {
  try {
    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create a new user record
    const newUser = await UserModel.create({
      role: "user", // Default role
      username: username,
      hashed_password: hashedPassword,
      fname: fname,
      lname: lname,
      email: email,
      address: address,
    });

    // Optionally, you can return the newly created user
    return `${newUser.name} is created successfully`;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Error registering user");
  }
};

// Function to login user
export const loginUser = async (username, password) => {
  try {
    const user = await UserModel.findOne({ where: { username } });

    if (!user) return false; // User does not exist

    // Admin
    if (
      user.role === "admin" &&
      (await comparePasswords(user.hashed_password, password))
    )
      return user.role;

    // User
    if (
      user.role === "user" &&
      (await comparePasswords(user.hashed_password, password))
    )
      return user.role;

    return false; // Wrong credentials
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Error logging in");
  }
};

/*
 * Note: 
   - UserModel.create() creates a new user record in the database
 */
