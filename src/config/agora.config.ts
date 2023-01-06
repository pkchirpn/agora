const { RtcRole } = require("agora-access-token");

// Rtc Examples
const appID = process.env.APP_ID;
const appCertificate = process.env.APP_CERTIFICATE;
const channelName = process.env.CHANNEL_NAME;
const uid = process.env.UID;
const account = process.env.ACCOUNT;
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 86400;

const currentTimestamp = Math.floor(Date.now() / 1000);

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

export {
  appID,
  appCertificate,
  channelName,
  uid,
  role,
  privilegeExpiredTs,
  account,
};
