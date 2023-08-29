import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

///to verify the token before doing something for login user

export const authenticatetoken = (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  const tokenParts = authHeader.split(" ");
  const token = tokenParts[1];
  // console.log(token);
  if (token == null) {
    return res.status(401).json({ message: "token is missing" });
  }

  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(401).json({ message: "invalid token" });
    }
    req.user = user;
    next();
  });
};
