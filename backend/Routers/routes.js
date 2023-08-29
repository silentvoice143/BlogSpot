import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  refreshToken,
} from "../controller/user-controller.js";
import { uploadImage, getImage } from "../controller/image_controller.js";
import {
  createPost,
  getPost,
  getPostdetail,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import {
  addComment,
  getComments,
  deleteComment,
} from "../controller/comment-comtroller.js";
import upload from "../middleware/upload.js";
import { authenticatetoken } from "../middleware/jwt-controller.js";

import User from "../models/user.js";
const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.put("/logout", authenticatetoken, logoutUser);

router.post("/refreshtoken", refreshToken);

///post and get take three agrument
//1)route
//2)middleware
//3)function
router.post("/file/upload", upload.single("file"), uploadImage);

//this route is to get image from the database
router.get("/file/:filename", getImage);

//this route is used to save post
//here it takes a middleware for jwt token verification
router.post("/create", authenticatetoken, createPost);

//this route is used to add comment in the database
router.post("/comments/new", authenticatetoken, addComment);

//this route is used to get all the comments from database
router.get("/comments", authenticatetoken, getComments);

//this route i sto delete the comment
router.get("/comments/delete", authenticatetoken, deleteComment);

//this route is used to update the post by the user
router.put("/update", authenticatetoken, updatePost);

//this route is for deleting the post blog
router.delete("/delete", authenticatetoken, deletePost);

//this is to get all posts
router.get("/posts", authenticatetoken, getPost);

//this is used to get detail post
router.get("/postdetail", authenticatetoken, getPostdetail);
// router.post("/update-password", auth, updatePassword);

// router.post("/forgot-password", forgotPassword);h

export default router;
