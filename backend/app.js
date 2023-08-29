// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Connection from "./database/db.js";
// import router from "./Routers/routes.js";
// const PORT = 5000;
// const app = express();
// app.use(express.json()); // for parsing application/json
// app.use(cors);

// app.use("/", router);

// // Connect to database and start server after connection is established
// Connection();

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./Routers/routes.js";
import Connection from "./database/db.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to MongoDB
Connection();
app.use("/", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
