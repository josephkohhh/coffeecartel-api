/*
 * File: index.jsx
 * Author: Joseph Koh
 * Description: Entry point for CoffeeCartel express API app
 */

import express from "express";
import cors from "cors";
import routes from "./routes/root.mjs";

const app = express(); // Create instance of express app

// Register middleware to enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json()); // Register middleware to parse JSON bodies

app.use(routes); // Register routers

app.listen(3000, () => console.log(`Server started up listening on port 3000`));
