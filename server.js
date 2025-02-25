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
dotenv.config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

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
