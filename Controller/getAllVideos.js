import Video from "../Model/videoSchema.js";

const getAllVideos = async (req, res) => {
  const videos = await Video.find({}).populate("uploader");

  res.status(200).json(videos);
};

export default getAllVideos;
