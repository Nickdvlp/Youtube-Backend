import mongoose from "mongoose";
import Comment from "../Model/commentSchema.js";

const getCommentsByVideoId = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({
      video: id,
    }).populate("user");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

export default getCommentsByVideoId;
