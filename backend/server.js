const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Abhishek Portfolio Backend is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
  });
});

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });