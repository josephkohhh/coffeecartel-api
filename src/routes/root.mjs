/*
 * File: root.mjs
 * Author: Joseph Koh
 * Description: Represents a collection of routes
 */

import { Router } from "express";
import userRouter from "./user.mjs";
import orderRouter from "./order.mjs";

const router = Router(); // Create an instance of express router

// Register routers
router.use(userRouter);
router.use(orderRouter);
// router.use(productRouter);

export default router;
