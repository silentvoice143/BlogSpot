import express from "express";
import User, { IUser } from "../models/user";
import bcrypt from "bcrypt";
import { generateRefreshToken, generateToken } from "../utils/generate-token";
import { RefreshToken } from "../models/token";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/register", async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ success: true, message: "User already exist" });

    const newUser = await User.create({ name, email, password });

    return res.status(201).json({
      success: true,
      message: "USer registered successfully!",
      user: { email: newUser.email },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
});

router.post("/login", async (req: any, res: any) => {
  try {
    const { email, password, deviceIp } = req.body;
    const user: IUser = await User.findOne({ email });

    if (!user)
      return res
        .status(404)
        .json({ success: true, message: "User not found!" });

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched)
      return res
        .status(400)
        .json({ success: true, message: "Invalid credential" });

    const token = await generateToken(user);

    const refreshToken = await generateRefreshToken(user, deviceIp);
    delete user.password;

    return res.status(200).json({
      success: true,
      message: "User login successfully!",
      user: { token: token, refreshToken: refreshToken, user: user },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
});

router.post("/refresh-token", async (req: any, res: any) => {
  try {
    const { refreshToken, deviceIp } = req.body;

    const storedtoken = await RefreshToken.findOne({ token: refreshToken });

    if (!storedtoken)
      return res
        .status(401)
        .json({ success: true, message: "Refresh token required" });

    jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ success: true, message: "Invalid token" });

      if (storedtoken.ipAddress !== deviceIp) {
        return res.status(403).json({
          success: true,
          message: "Device mismatch, please login again",
        });
      }

      const accessToken = await generateToken(user);
      return res.status(200).json({
        success: true,
        message: "token created",
        accessToken: accessToken,
      });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
});

router.get("/active-sessions/:userId", async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const session = await RefreshToken.find({ userId }).select("-token");
    return res.status(200).json({ success: true, session });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
});

router.post("/logout-device", async (req: any, res: any) => {
  try {
    const { refreshToken } = req.body;
    await RefreshToken.deleteOne({ token: refreshToken });
    res
      .status(200)
      .json({ success: true, message: "Logged out from the device" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Server error ${error}` });
  }
});

export default router;
