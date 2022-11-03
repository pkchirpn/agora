const { RtcRole } = require("agora-access-token");

// Rtc Examples
const appID = "d37f7ee3abd34ceeb5bf6cdbf75b44d7";
const appCertificate = "def92b0433dc4f2c8cf42e94e602f1bc";
const channelName = "tuktuk-demo";
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600;

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
