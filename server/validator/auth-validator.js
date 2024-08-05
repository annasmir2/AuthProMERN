const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name atleast conatin 3 caharcters" })
    .max(255, { message: "Name no longer than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email atleast conatin 3 caharcters" })
    .max(255, { message: "Email no longer than 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password atleast conatin 7 caharcters" })
    .max(1024, { message: "Password no longer than 1024 characters" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(11, { message: "Phone atleast conatin 11 caharcters" })
    .max(20, { message: "Password no longer than 20 characters" }),
});

module.exports = signupSchema;
