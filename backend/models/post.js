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
  category: {
    type: String,
  },
});

const post = new mongoose.model("post", postSchema);

export default post;

// title: "",
//   author: "",
//   dop: new Date(),
//   picture: "",
//   content: "",
//   email: "",
