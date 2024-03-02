import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { loginUser, registerUser } from "./services/userService.mjs";
import { verifyToken } from "./middleware/verifyToken.mjs";

const app = express(); // Create instance of express app

const secretKey = "yourSecretKey"; // secretKey

app.use(express.json()); // Register middleware to parse JSON bodies

// Register middleware to enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Login request
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await loginUser(username, password); // Login user

    // Use constant-time comparison to mitigate timing attacks
    const isValid = user.role === "admin" || user.role === "user";

    // Success
    if (isValid) {
      const token = jwt.sign({ userId: user.id }, secretKey); // Generate JWT token

      return res.json({
        status: 200,
        token,
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
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
app.post("/register", async (req, res) => {
  try {
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

// Admin protected request
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" }); // If token is valid, the user is authenticated
});

app.listen(3000, () => console.log(`Server started up listening on port 3000`));
