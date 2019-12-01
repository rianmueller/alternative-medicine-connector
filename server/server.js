// const express = require("express");
// const bodyParser = require("body-parser");
// const decorator = require("./database/decorator");
// const session = require("express-session");
// const passport = require("passport");
// const redis = require("redis");
// const RedisStore = require("connect-redis")(session);

// const api = require("./api/index");

// require("dotenv").config({ path: "../.env" });
// //
// const PORT = process.env.EXPRESS_HOST_PORT;
// const SESSION_SECRET = process.env.SESSION_SECRET;
// const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

// // const PORT = process.env.PORT || 8080;

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
// //
// let client = redis.createClient({ url: process.env.REDIS_HOSTNAME });
// const app = express();

// app.use("/api/habits", api.habits);
// app.use("/api/users", api.users);
// app.use("/api/auth", api.auth);

// app.use(express.static("./server/public"));
// app.use(bodyParser.json());
// app.use(decorator);

// app.use(
//   session({
//     store: new RedisStore({ client }),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );

// // function isAuthenticated(req, res, next) {
// //   if (req.isAuthenticated()) {
// //     return next();
// //   } else {
// //     return res.redirect("/login.html");
// //   }
// // }
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//   console.log("serializing");
//   return done(null, { id: user.id, username: user.email });
// });

// passport.deserializeUser(function(user, done) {
//   console.log("deserializing");
//   console.log(user);
//   return done(null, user);
// });

// app.get("/smoke", (req, res) => {
//   return res.json({ message: "I see smoke in root." });
// });

// app.listen(PORT, () => {
//   console.log(`server started on PORT:${PORT}`);
// });

//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const api = require("./api/index");

const app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.static("./server/public"));

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(decorator);

app.use("/api/products", api.products);
app.use("/api/users", api.users);
app.use("/api/auth", api.auth);
app.use("/api/conditions", api.conditions);
app.use("/api/helpsWith", api.helpsWith);
app.use("/api/affectedBy", api.affectedBy);

app.get("/smoke", (req, res) => {
  return res.send("Smoke");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
