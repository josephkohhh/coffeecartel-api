/*
 * File: index.mjs
 * Author: Joseph Koh
 * Description: Entry point for CoffeeCartel express API app
 */

import express from "express";
import cors from "cors";
import routes from "./routes/root.mjs";

const app = express(); // Create instance of express app
const whiteListUrl1 = process.env.WHITELIST_URL1;

// Register middleware to enable CORS
app.use(
  cors({
    origin: whiteListUrl1,
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

const port = process.env.PORT || 3000;

app.use(express.json()); // Register middleware to parse JSON bodies

app.use(routes); // Register routers

app.listen(port, () =>
  console.log(`Server started up listening on port ${port}`)
);
