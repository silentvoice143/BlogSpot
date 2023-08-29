import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const comment = new mongoose.model("comment", commentSchema);
export default comment;
