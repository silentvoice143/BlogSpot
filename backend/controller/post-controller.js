import Post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    console.log(req.body);
    const post = new Post(req.body);
    await post.save();
    return res.status(200).json({ message: "successfully post created" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export const getPost = async (req, res) => {
  try {
    let category = req.query.category;
    // console.log(req);
    let posts;
    if (category) {
      posts = await Post.find({ category: category });
    } else {
      posts = await Post.find({});
    }
    // console.log(posts);

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export const getPostdetail = async (req, res) => {
  try {
    // console.log(req.query.id);
    const post = await Post.findById(req.query.id);
    if (post) {
      // console.log(post);
      return res
        .status(200)
        .json({ message: "successfully get the post", post: post });
    } else {
      return res.status(400).json({ message: "Post not found" });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    // console.log(req.body);
    const { title, content, dop, picture, email, author, category } = req.body;
    const updatedUser = await Post.findByIdAndUpdate(
      req.query.id,
      {
        $set: { title, content, dop, picture, email, author, category },
        // You can use other update operators like $inc, $push, etc.
      },
      { new: true }
    ); // { new: true } returns the updated document

    if (updatedUser) {
      return res.status(200).json({ message: "post updated successfully" });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user data." });
  }
};

export const deletePost = async (req, res) => {
  const postId = req.query.id;

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (deletedPost) {
      res.json({ message: "Post deleted successfully." });
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting post." });
  }
};
