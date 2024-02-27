import { registerUser } from "./services/userService.mjs";

const admin = registerUser(
  "admin",
  "password123",
  "john",
  "doe",
  "johndoe@coffeecartel.com",
  "NA"
);

console.log(admin);
