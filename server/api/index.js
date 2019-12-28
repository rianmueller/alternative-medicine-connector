const products = require("./products/index");
// const auth = require("./auth/index");
const token = require('./token/index')
const users = require("./users/index");
const conditions = require("./conditions/index");
const helpsWith = require("./helpsWith/index");
const affectedBy = require("./affectedBy");

module.exports = {
  products,
  token,
  // auth,
  users,
  conditions,
  helpsWith,
  affectedBy
};
