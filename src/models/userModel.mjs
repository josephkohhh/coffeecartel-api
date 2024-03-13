/*
 * File: userModel.mjs
 * Author: Joseph Koh
 * Description: Define the UserModel which can be used to interact with the corresponding table in the database performing CRUD
 *
 */

import { sequelize } from "../config/db.mjs";
import { user } from "../schema/user.mjs";

export const UserModel = sequelize.define("users", user);

/*
 * Note: 
   - UserModel is a sequelize model that can perform querying, inserting, updating, and deleting records in the associated db table
     - create() // Creates a new record in the table
     - update() // Update records in the table
     - destroy() // Delete records from the table
     - findAll(), findOne(), findByPk() // Querying records from the table
 */
