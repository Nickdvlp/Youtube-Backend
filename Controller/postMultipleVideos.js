import Video from "../Model/videoSchema.js";

const postMultipleVideos = async (req, res) => {
  try {
    const videos = req.body; // Expecting an array of video objects

    if (!Array.isArray(videos) || videos.length === 0) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const savedVideos = await Video.insertMany(videos);
    res.status(201).json({ message: "Videos added successfully", savedVideos });
  } catch (error) {
    res.status(500).json({ message: "Error adding videos", error });
  }
};

export default postMultipleVideos;
