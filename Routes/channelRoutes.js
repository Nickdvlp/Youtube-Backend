import express from "express";
import createChannel from "../Controller/createChannel.js";
import getAllChannels from "../Controller/getAllChannels.js";
import getSingleChannel from "../Controller/getSingleChannel.js";
import uploadLogo from "../utils/cloudinary.channelLogo.js";

const router = express.Router();

router.post("/create", uploadLogo.single("channelLogo"), createChannel);

router.get("/all", getAllChannels);
router.get("/:id", getSingleChannel);

export default router;
