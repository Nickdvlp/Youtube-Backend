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

// ✅ Allowed Origins (for local and deployed frontend)
const allowedOrigins = ["https://mytube0.netlify.app", "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // ✅ Allow cookies
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

app.use("/api/user", userRoutes);
app.use("/api/channels", authMiddleware, channelRoutes);
app.use("/api", authMiddleware, videosRoute);
app.use("/api/comment", authMiddleware, commentRoute);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
