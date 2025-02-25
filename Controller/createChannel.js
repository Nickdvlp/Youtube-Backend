import Channel from "../Model/channelSchema.js";

async function createChannel(req, res) {
  const { channelname, description } = req.body;
  const channelLogo = req.file ? req.file.path : undefined;
  const newChannel = new Channel({
    channelname,
    description,
    creator: req.user.id,
    channelLogo,
  });

  await newChannel.save();
  res.status(201).json({ newChannel, message: "Your channel is created" });
}

export default createChannel;
