require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = require("./routers/auth-router");
const controuter = require("./routers/contact-router");
const servicerout = require("./routers/service-router");
const users = require("./routers/admin-router");
const errorMiddleware = require("./middleware/error-middleware");

// Handling CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", controuter);
app.use("/api/service", servicerout);
app.use("/api/admin", users);
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(errorMiddleware);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();
const port = 8000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
