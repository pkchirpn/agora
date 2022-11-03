import { Request, Response } from "express";

import {
  buildTokenWithAccount,
  buildTokenWithUid,
} from "../helper/generateToken";


const generateTokenWithUid = async (req: Request, res: Response) => {
  try {
    let channelName = req.query?.channelName || "tuktuk";
    const token = await buildTokenWithUid(channelName);
    if (token) {
      return res.status(200).json({
        message: "Token generated successfully",
        token,
        tokenCreatedAt: new Date().toString(),
      });
    }
    return res.status(400).json({
      message: "Error generating token",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error generating token",
      error,
    });
  }
};
const generateTokenWithAccount = async (req: Request, res: Response) => {
  try {
    let channelName = req.query?.channelName || "tuktuk";
    const token = await buildTokenWithAccount(channelName);
    if (token) {
      return res.status(200).json({
        message: "Token generated successfully",
        token,
        tokenCreatedAt: new Date().toString(),
      });
    }
    return res.status(400).json({
      message: "Error generating token",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error generating token",
      error,
    });
  }
};

export { generateTokenWithUid, generateTokenWithAccount };
