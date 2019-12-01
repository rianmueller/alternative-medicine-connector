const products = require("./products/index");
const auth = require("./auth/index");
const users = require("./users/index");
const conditions = require("./conditions/index");
const helpsWith = require("./helpsWith/index");
const affectedBy = require("./affectedBy/index");

module.exports = {
  products,
  auth,
  users,
  conditions,
  helpsWith,
  affectedBy
};
