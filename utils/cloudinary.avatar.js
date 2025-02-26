import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: "djsnvplhb",
  api_key: "776724354627458",
  api_secret: "_1h9JxW_kcresIgx6F43qSsnSkI",
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
