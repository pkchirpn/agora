const {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} = require("agora-access-token");

import {
  appID,
  appCertificate,
  uid,
  role,
  privilegeExpiredTs,
  account,
} from "../config/agora.config";

async function buildTokenWithUid(channelName: string): Promise<string> {
  // Build token with uid
  const tokenA = RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channelName,
    uid,
    role,
    privilegeExpiredTs
  );
  return tokenA;
}

async function buildTokenWithAccount(channelName: string): Promise<string> {
  // Build token with user account
  const tokenB = RtcTokenBuilder.buildTokenWithAccount(
    appID,
    appCertificate,
    channelName,
    account,
    role,
    privilegeExpiredTs
  );
  // console.log("Token With UserAccount: " + tokenB);
  return tokenB;
}

export { buildTokenWithAccount, buildTokenWithUid };
