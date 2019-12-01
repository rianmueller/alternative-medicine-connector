const Condition = require("./models/Condition");
const User = require("./models/User");
const Product = require("./models/Product");
const Flavor = require("./models/Flavor");
const Species = require("./models/Species");
const HelpsWith = require("./models/HelpsWith");

module.exports = function(req, res, next) {
  req.db = {
    Condition,
    User,
    Product,
    Flavor,
    Species,
    HelpsWith
  };
  next();
};
