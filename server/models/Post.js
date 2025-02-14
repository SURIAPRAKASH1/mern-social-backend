import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please provide userId"],
    },
    firstname: {
      type: String,
      required: [true, "Please provide firstName"],
    },

    lastname: {
      type: String,
      required: [true, "Please provide lastName"],
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
