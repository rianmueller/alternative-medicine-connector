//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

require("dotenv").config({ path: "../.env" });
const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
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

const app = express();

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(decorator);

// routes
const api = require("./api/index");
app.use("/api/products", api.products);
app.use("/api/users", api.users);
app.use("/api/auth", api.auth);
app.use("/api/conditions", api.conditions);
app.use("/api/helpsWith", api.helpsWith);
app.use("/api/affectedBy", api.affectedBy);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
