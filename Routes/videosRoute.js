import express from "express";
import postVideo from "../Controller/postVideo.js";
import getAllVideos from "../Controller/getAllVideos.js";
import postMultipleVideos from "../Controller/postMultipleVideos.js";
import getSingleVideo from "../Controller/getSingleVideo.js";
import increaseLikes from "../Controller/increaseLikes.js";

const router = express.Router();

router.post("/video", postVideo);

router.post("/videos/batch", postMultipleVideos);
router.get("/videos", getAllVideos);
router.get("/video/:id", getSingleVideo);

router.put("/videos/likes/:id", increaseLikes);

export default router;
