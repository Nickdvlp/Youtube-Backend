import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
    channels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
