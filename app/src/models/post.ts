import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  dop: {
    type: Date,
    required: true,
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  view: {
    type: Number,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
