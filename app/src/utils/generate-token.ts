import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user";
import dotenv from "dotenv";
import { RefreshToken } from "../models/token";
dotenv.config();

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const generateRefreshToken = async (
  user: IUser,
  deviceIp: String
): Promise<string> => {
  const refreshToken = jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  await RefreshToken.create({
    token: refreshToken,
    userId: user._id,
    expiteAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    ipAddress: deviceIp,
  });

  return refreshToken;
};
