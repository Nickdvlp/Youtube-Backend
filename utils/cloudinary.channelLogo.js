import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "djsnvplhb",
  api_key: "776724354627458",
  api_secret: "_1h9JxW_kcresIgx6F43qSsnSkI",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "channel Logo",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => `channelLogo-${Date.now()}-${file.originalname}`, // Unique filename
  },
});

const uploadLogo = multer({ storage });

export default uploadLogo;
