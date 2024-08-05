const {z} =require("zod");

const contSchema=z.object({
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

    message:z.
    string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message atleast conatin 3 caharcters" })
})

module.exports=contSchema