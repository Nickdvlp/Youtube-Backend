import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
  {
    channelname: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: {
      type: String,
    },
    channelLogo: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

const Channel = mongoose.model("channel", channelSchema);

export default Channel;
