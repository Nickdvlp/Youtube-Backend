import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "channel",
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: { type: String },
    category: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    uploadDate: { type: Date, default: Date.now },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("videos", videoSchema);

export default Video;
