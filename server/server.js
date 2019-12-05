//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const api = require("./api/index");

//authentication dependencies
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const saltRounds = 12;
const User = require("./database/models/User");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const client = redis.createClient({ url: process.env.REDIS_URL });

require("dotenv").config({ path: "../.env" });
const PORT = process.env.EXPRESS_HOST_PORT;
// const SESSION_SECRET = process.env.SESSION_SECRET;
// const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
// if (!PORT) {
//   console.log("No Port Found");
// }
// if (!SESSION_SECRET) {
//   console.log("No Session Secret Found");
// }
// if (!REDIS_HOSTNAME) {
//   console.log("No Redis Hostname Found");
// }
// if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
//   return process.exit(1);
// }

const app = express();

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(decorator);

app.use(passport.initialize());
app.use(passport.session());

//authentication
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // return res.redirect("/login.html");
    return res.send({ message: "You have not been authenticated" });
  }
}

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      return new User({ email })
        .fetch({ require: false })
        .then(user => {
          if (user === null) {
            console.log("user not found");
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();
            bcrypt.compare(password, user.password).then(res => {
              // Happy route: email exists, password matches
              if (res) {
                return done(null, user); // this is the user that goes to serializeUser()
              }
              // Error Route: email exists, password does not match
              else {
                console.log("bad password");
                return done(null, false, {
                  message: "bad username or password"
                });
              }
            });
          }
        })
        .catch(err => {
          console.log("error: ", err);
          return done(err);
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log("serializing, user: ");
  console.log(user);
  return done(null, { id: user.id, email: user.email, name: user.name });
});

passport.deserializeUser(function(user, done) {
  console.log("deserializing, user: ");
  console.log(user);
  return done(null, user);
});

app.use("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.isAuthenticated());
  return res.json({ session: req.user });
});

// routes
app.use("/api/products", isAuthenticated, api.products);
app.use("/api/users", isAuthenticated, api.users);
app.use("/api/auth", isAuthenticated, api.auth);
app.use("/api/conditions", isAuthenticated, api.conditions);
app.use("/api/helpsWith", isAuthenticated, api.helpsWith);
app.use("/api/affectedBy", isAuthenticated, api.affectedBy);

// app.use(express.static("./server/public"));

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
