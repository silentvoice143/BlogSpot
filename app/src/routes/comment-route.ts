import express from "express";
import Comment from "../models/comment";
const router = express.Router();

router.post("/", async (req: any, res: any) => {
  try {
    const comment = await new Comment(req.body);
    await comment.save();
    return res.status(200).json({ message: "Successfully added comment" });
  } catch (err) {
    return res.status(401).json({ error: "Error while saving comment" });
  }
});

router.get("/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ postId: id });
    return res.status(200).json(comments);
  } catch (err) {
    return res.status(401).json({ error: "Error while fetching comments" });
  }
});

router.delete("/:id", async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const deletedPost = await Comment.findByIdAndDelete({ postId: id });
    if (deletedPost) {
      res.json({ message: "Comment deleted successfully." });
    } else {
      res.status(404).json({ message: "Comment not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment." });
  }
});

export default router;
