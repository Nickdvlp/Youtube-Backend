import Channel from "../Model/channelSchema.js";
import Video from "../Model/videoSchema.js";

async function getAllChannels(req, res) {
  const channels = await Channel.find().populate("creator");
  const videos = await Video.find();
  res.json(channels, videos);
}

export default getAllChannels;
