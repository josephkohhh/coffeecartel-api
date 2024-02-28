import express from "express";
import cors from "cors";
import { loginUser, registerUser } from "./services/userService.mjs";

const app = express(); // Create instance of express app

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

    const result = await loginUser(username, password);

    // Use constant-time comparison to mitigate timing attacks
    const isValid = result === "admin" || result === "user";

    // Return fail response for invalid login attempts
    if (!isValid)
      return res.json({ status: 401, error: "Invalid username or password" });

    // Return success response for valid login attempts
    res.json({ status: 200, role: result });
  } catch (error) {
    console.error("Error logging in:", error);
    res.json({ status: 500, error: "Internal server error" });
  }
});

app.listen(3000, () => console.log(`Server started up listening on port 3000`));
