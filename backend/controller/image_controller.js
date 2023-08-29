import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:5000";

let gfs, gridfsbucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsbucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs", // name of the GridFS collection in your database (default is fs)
  });

  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(404).json({ message: "File not found" });
  }

  const imgURL = `${url}/file/${req.file.filename}`;
  return res.status(200).json({ imgURL });
};

export const getImage = async (req, res) => {
  // console.log("getting image");
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    // console.log(file);
    const readStream = gridfsbucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
