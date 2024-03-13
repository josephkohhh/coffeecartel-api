/*
 * File: order.mjs
 * Author: Joseph Koh
 * Description: Represents order related endpoints
 */

import { Router } from "express";
import { GetOrder, CreateOrder } from "../services/orderService.mjs";

const router = Router(); // Create an instance of express router

// Create order request
router.post("/createOrder", async (req, res) => {
  // Success
  try {
    const { cartList, username } = req.body;
    console.log(cartList);
    await CreateOrder(cartList, username); // Create order

    return res.json({ status: 201 });
  } catch (error) {
    // Fail
    return res.json({ status: 500, error: "Internal server error" });
  }
});

// Get order request
router.get("/getOrder", async (req, res) => {
  // Success
  try {
    const { username } = req.query;
    const orderedItems = await GetOrder(username); // Fetch order

    return res.json({ status: 200, orderedItems });
  } catch (error) {
    // Fail
    return res.json({ status: 500, error: "Internal server error" });
  }
});

export default router;
