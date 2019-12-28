const express = require("express");
const router = express.Router();
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

require("dotenv").config();
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;


router.post("/", (req, res) => {
  const identity = req.body.identity;

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  token.identity = identity;

  const grant = new VideoGrant({ room: "GreenMeds" });
  token.addGrant(grant);

  res.send({
    identity: identity,
    token: token.toJwt()
  });
});

module.exports = router;
