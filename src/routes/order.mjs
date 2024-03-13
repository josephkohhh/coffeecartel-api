/*
 * File: order.mjs
 * Author: Joseph Koh
 * Description: Represents order related endpoints
 */

import { Router } from "express";
import { CreateOrder } from "../services/orderService.mjs";

const router = Router(); // Create an instance of express router

// Create order request
router.post("/order", async (req, res) => {
  // Success
  try {
    const { cartList, username } = req.body;

    await CreateOrder(cartList, username); // Create order

    return res.json({ status: 201 });
  } catch (error) {
    // Fail
    return res.json({ status: 500, error: "Internal server error" });
  }
});

export default router;
