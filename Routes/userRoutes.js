import express from "express";
import loginUser from "../Controller/loginUser.js";
import registerUser from "../Controller/registerUser.js";
import upload from "../utils/cloudinary.avatar.js";
import getUser from "../Controller/getUser.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", upload.single("avatar"), registerUser);
router.get("/get", getUser);

export default router;
