import Comment from "../Model/commentSchema.js";

async function uploadComment(req, res) {
  const { text, videoId } = req.body;

  if (!text) {
    return res.status(400).json({ message: "text is required" });
  }
  if (!videoId) {
    return res.status(400).json({ message: "videoId is required" });
  }

  const newComment = new Comment({ text, video: videoId, user: req.user.id });
  await newComment.save();

  res.status(200).json({ newComment });
}

export default uploadComment;
