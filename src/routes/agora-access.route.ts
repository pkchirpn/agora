import express from "express";
import {
  generateTokenWithUid,
  generateTokenWithAccount,
} from "../controllers/agora-access.controller";

const router = express.Router();

router.get("/generate/with-account", generateTokenWithAccount);
router.get("/generate/with-uid", generateTokenWithUid);

export { router };
