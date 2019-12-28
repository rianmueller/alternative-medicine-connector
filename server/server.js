//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

require("dotenv").config({ path: "../.env" });

const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioclient = require("twilio")(accountSid, authToken);

if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}

const app = express();

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(decorator);

// routes
const api = require("./api/index");
app.use("/api/products", api.products);
app.use("/api/users", api.users);
// app.use("/api/auth", api.auth);
app.use("/api/conditions", api.conditions);
app.use("/api/helpsWith", api.helpsWith);
app.use("/api/affectedBy", api.affectedBy);

app.post("/token", (req, res) => {
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
