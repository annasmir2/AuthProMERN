const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email format is incorrect" })
    .max(255, { message: "Email format is incorrect" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Inavlid Logins" })
    .max(1024, { message: "Inavlid Logins" }),
});

module.exports = loginSchema;
