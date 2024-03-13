/*
 * File: orderService.mjs
 * Author: Joseph Koh
 * Description: Responsible for managing orders
 */

import { OrderModel } from "../models/orderModel.mjs";

// Function to create order
export const CreateOrder = async (cartList, username) => {
  try {
    // Map an array of order items
    const orderItems = cartList.map((i) => ({
      username: username,
      order_item: i.name,
      description: i.desc,
      quantity: i.qty,
      amount: i.price,
      total_amount: i.price * i.qty + i.price * i.qty * 0.09,
      image: i.image,
      status: "pending",
    }));
    // Create order records
    await OrderModel.bulkCreate(orderItems);
  } catch (error) {
    throw new Error("Error creating order", error);
  }
};

// Function to fetch order
export const GetOrder = async (username) => {
  try {
    return OrderModel.findAll({ where: { username } });
  } catch (error) {
    throw new Error("Error fetching order", error);
  }
};
