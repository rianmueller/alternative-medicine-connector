const products = require("../api/products/index");
const auth = require("../api/auth/index");
const users = require("../api/users/index");

module.exports = {
  products: products,
  auth: auth,
  users: users
};
