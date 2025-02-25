import Video from "../Model/videoSchema.js";

const getSingleVideo = async (req, res) => {
  try {
    const id = req.params.id; // Fix: Correctly access the ID
    if (!id) return res.status(400).json({ message: "Invalid video ID" });

    // Find and update the view count in one step
    const video = await Video.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } }, // Increment views by 1
      { new: true } // Return the updated document
    ).populate("uploader"); // Populate uploader details

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Error fetching video", error });
  }
};

export default getSingleVideo;
