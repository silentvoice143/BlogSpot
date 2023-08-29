import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb://0.0.0.0:27017/blog",
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-blod-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blod-${file.originalname}`,
    };
  },
});

export default multer({ storage });
