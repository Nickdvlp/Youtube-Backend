import Video from "../Model/videoSchema.js";

async function increaseLikes(req, res) {
  try {
    const { id } = req.params;
    const video = await Video.findByIdAndUpdate(id, { $inc: { likes: 1 } });
    res.status(200).json(video);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export default increaseLikes;
