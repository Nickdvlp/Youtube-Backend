import Channel from "../Model/channelSchema.js";
import Video from "../Model/videoSchema.js";

async function getSingleChannel(req, res) {
  const channel = await Channel.findById(req.params.id);
  const videos = await Video.find();
  if (!channel) {
    return res.status(404).json({ message: "Channel not found" });
  }

  return res.status(200).json({ channel, videos });
}

export default getSingleChannel;
