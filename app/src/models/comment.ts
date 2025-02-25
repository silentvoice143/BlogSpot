import mongoose, { Mongoose } from "mongoose";
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
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

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
