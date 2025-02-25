import User from "../Model/userSchema.js";
import Video from "../Model/videoSchema.js";

const postVideo = async (req, res) => {
  const { title, thumbnailUrl, videoUrl, description, category } = req.body;

  const video = new Video({
    title,
    thumbnailUrl,
    videoUrl,
    uploader: req.user.id,
    description,
    category,
  });

  await video.save();
  res.status(200).json(video);
};

export default postVideo;
