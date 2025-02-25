import express from "express";
import uploadComment from "../Controller/uploadComment.js";
import getComments from "../Controller/getComments.js";
const router = express.Router();

router.post("/post", uploadComment);
router.get("/get/:id", getComments);

export default router;
