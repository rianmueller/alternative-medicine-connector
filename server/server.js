const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const session = require("express-session");
const passport = require("passport");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

require("dotenv").config();
//
const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioclient = require("twilio")(accountSid, authToken);
if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_HOSTNAME) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}

//
let client = redis.createClient({ url: process.env.REDIS_HOSTNAME });
const app = express();

app.use(express.static("./server/public"));
app.use(bodyParser.json());
app.use(decorator);

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.redirect("/login.html");
//   }
// }
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("serializing");
  return done(null, { id: user.id, username: user.email });
});

passport.deserializeUser(function(user, done) {
  console.log("deserializing");
  console.log(user);
  return done(null, user);
});

app.post("/token", (req, res) => {
  const identity = req.body.identity;

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  token.identity = identity;

  const grant = new VideoGrant({room:"GreenMeds"});
  token.addGrant(grant);

  res.send({
    identity: identity,
    token: token.toJwt()
  });
});



app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});