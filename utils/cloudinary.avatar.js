import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "avatars",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => `avatar-${Date.now()}-${file.originalname}`, // Unique filename
  },
});

const upload = multer({ storage });

export default upload;
