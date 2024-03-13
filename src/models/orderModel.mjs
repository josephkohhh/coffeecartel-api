/*
 * File: orderModel.mjs
 * Author: Joseph Koh
 * Description: Define the OrderModel which can be used to interact with the corresponding table in the database performing CRUD
 *
 */

import { sequelize } from "../config/db.mjs";
import { order } from "../schema/order.mjs";

export const OrderModel = sequelize.define("orders", order);

/*
 * Note: 
   - OrderModel is a sequelize model that can perform querying, inserting, updating, and deleting records in the associated db table
     - create() // Creates a new record in the table
     - update() // Update records in the table
     - destroy() // Delete records from the table
     - findAll(), findOne(), findByPk() // Querying records from the table
 */
