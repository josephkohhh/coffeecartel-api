/*
 * File: db.mjs
 * Author: Joseph Koh
 * Description: Create a sequelize instance and establish a connection to a mysql database
 */

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("coffeecarteldb", "root", "P@ssw0rd", {
  host: "localhost", // Running locally
  dialect: "mysql",
  // pool: {
  //   max: 10,
  //   min: 0,
  //   acquire: 30000, // Max time to wait for a connection from the pool
  //   idle: 10000 // Max time that a connection can remain idle in the pool before being released
  // }
});

/*
 * Note: 
   - The sequelize instance created will have props and methods to interact with configured mysql db
 */
