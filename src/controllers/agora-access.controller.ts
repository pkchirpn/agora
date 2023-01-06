import { Request, Response } from "express";

import {
  buildTokenWithAccount,
  buildTokenWithUid,
} from "../helper/generateToken";
import { uid, role, privilegeExpiredTs, account } from "../config/agora.config";

const generateTokenWithUid = async (req: Request, res: Response) => {
  try {
    const channelName = req.query.channelName;
    if (typeof channelName === "string") {
      const token = await buildTokenWithUid(channelName);
      if (token) {
        return res.status(200).json({
          message: "Token generated successfully",
          token,
        });
      }
      return res.status(400).json({
        message: "Error generating token",
      });
    } else {
      return res.status(400).json({
        message: "Send channelName in query",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error generating token",
      error,
    });
  }
};
const generateTokenWithAccount = async (req: Request, res: Response) => {
  try {
    const channelName = req.query.channelName;
    if (typeof channelName === "string") {
      const token = await buildTokenWithAccount(channelName);
      if (token) {
        return res.status(200).json({
          message: "Token generated successfully",
          token,
        });
      }
      return res.status(400).json({
        message: "Error generating token",
      });
    } else {
      return res.status(400).json({
        message: "Send channelName in query",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error generating token",
      error,
    });
  }
};

export { generateTokenWithUid, generateTokenWithAccount };
