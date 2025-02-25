import express from "express";
import Post from "../models/post";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  try {
    console.log(req.body);
    const post = new Post(req.body);
    await post.save();
    return res.status(200).json({ message: "successfully post created" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

router.get("/", async (req: any, res: any) => {
  try {
    console.log("hitting this route");
    let category = req.query.category;
    console.log(category);
    let posts;
    if (category && category.length > 0) {
      posts = await Post.find({ category: category[0] });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json({ success: true, posts });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

router.get("/detail/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const post = await Post.findById({ _id: id });
    if (post) {
      return res
        .status(200)
        .json({ message: "successfully get the post", post: post });
    } else {
      return res.status(400).json({ message: "Post not found" });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

router.put("/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params.id;
    const { title, content, dop, picture, email, author, category } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { $set: { title, content, dop, picture, email, author, category } },
      { new: true }
    );
    if (updatedPost) {
      return res.status(200).json({ message: "post updated successfully" });
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating post." });
  }
});

router.delete("/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete({ _id: id });
    if (deletedPost) {
      res.json({ message: "Post deleted successfully." });
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting post." });
  }
});

export default router;
