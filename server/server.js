//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");


require("dotenv").config({ path: "../.env" });

const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;



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
app.use("/api/token", api.token)
app.use("/api/products", api.products);
app.use("/api/users", api.users);
app.use("/api/conditions", api.conditions);
app.use("/api/helpsWith", api.helpsWith);
app.use("/api/affectedBy", api.affectedBy);



app.listen(PORT, () => {});
