import mongoose from "mongoose";

const Connection = () => {
  const url = "mongodb://0.0.0.0:27017/blog";
  // Connect to the MongoDB database
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });
};

export default Connection;
