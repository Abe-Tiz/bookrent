// validation.js
const { z } = require("zod");

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  location: z.string(),
  phone: z.string().regex(/^\+?[0-9]*$/, "Invalid phone number format"), // Regex to allow optional '+' and digits only
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = { userSchema, loginSchema };
