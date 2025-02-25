import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const mongoURI = process.env.MONGO_URI;

// ✅ Ensure MongoDB connection is open before file upload
const conn = mongoose.createConnection(mongoURI);

let gfs, gridfsbucket;
conn.once("open", () => {
  gridfsbucket = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "fs" });
  gfs = new mongoose.mongo.GridFSBucket(conn.db);
});

// ✅ Configure Multer GridFS Storage
const storage = new GridFsStorage({
  url: mongoURI!,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      resolve({
        bucketName: "fs",
        filename: `${Date.now()}-${file.originalname}`, // Unique filename
      });
    });
  },
});

const upload = multer({ storage });

// ✅ Upload Route
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imgURL = `${process.env.BASE_URL}/file/${req.file.filename}`;
  console.log("Uploaded File:", req.file);
  return res.status(200).json({ imgURL });
});

// ✅ Fetch File Route
router.get("/:filename", async (req, res) => {
  try {
    const file = await conn.db
      .collection("fs.files")
      .findOne({ filename: req.params.filename });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const readStream = gridfsbucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
