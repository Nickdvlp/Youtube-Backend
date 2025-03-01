import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import videosRoute from "./Routes/videosRoute.js";
import userRoutes from "./Routes/userRoutes.js";
import authMiddleware from "./Middleware/authMiddleware.js";
import channelRoutes from "./Routes/channelRoutes.js";
import commentRoute from "./Routes/commentRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "https://mytube0.netlify.app",
    credentials: true,
  })
);

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Origin", "https://mytube0.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});
app.use(bodyParser.json()); // Ensure JSON parsing
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("open", () => {
  console.log("db connected");
});
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/channels", authMiddleware, channelRoutes);
app.use("/api", authMiddleware, videosRoute);
app.use("/api/comment", authMiddleware, commentRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
