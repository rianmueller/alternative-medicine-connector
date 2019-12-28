const express = require("express");
const router = express.Router();

//authentication dependencies
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const saltRounds = 12;
const User = require("../../database/models/User");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const dotenv = require("dotenv").config();
const client = redis.createClient({ url: process.env.REDIS_URL });

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // return res.redirect("/login.html");
    return res.send({ message: "You have not been authenticated" });
  }
}

router.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

router.use(passport.initialize());
router.use(passport.session());

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
                return done(null, false, {
                  message: "bad username or password"
                });
              }
            });
          }
        })
        .catch(err => {
          return done(err);
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  return done(null, { id: user.id, email: user.email, name: user.name });
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

router.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
    } // return 500
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
      } // return 500
      return new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        user_status_id: 1
      })
        .save()
        .then(user => {
          return res.status(200).json(user);
        })
        .catch(err => {
          return res.send("Error creating account");
        });
    });
  });
});

router.use("/login", passport.authenticate("local"), (req, res) => {
  return res.json({ session: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  return res.json({ session: {} });
});

// should dispay your name when you are logged in, undefined when you are not
router.get("/smoke", (req, res) => {
  return res.send(`Hello, ${req.user.name}`);
});

// should display your name when you are logged in, "You have not been authenticated" when you are not
router.get("/authsmoke", isAuthenticated, (req, res) => {
  return res.send(`Hello, ${req.user.name}`);
});

module.exports = router;
