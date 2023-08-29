import Comment from "../models/comment.js";

export const addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(200).json({ message: "successfully comment" });
  } catch (err) {
    return res
      .status(401)
      .json({ error: "something is wrong while saving comment" });
  }
};

export const getComments = async (req, res) => {
  //   console.log(req);
  let id = req.query.id;
  //   console.log(id);
  try {
    const comments = await Comment.find({ postId: id });
    return res.status(200).json(comments);
  } catch (err) {
    return res
      .status(401)
      .json({ error: "something is wrong while fetching comments", err });
  }
};

export const deleteComment = async (req, res) => {
  //   console.log(req);
  const postId = req.query.id;
  console.log(postId);
  try {
    const deletedPost = await Comment.findByIdAndDelete(postId);
    if (deletedPost) {
      res.json({ message: "comment deleted successfully." });
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment." });
  }
};
