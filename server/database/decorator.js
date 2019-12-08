const Condition = require("./models/Condition");
const User = require("./models/User");
const Product = require("./models/Product");
const HelpsWith = require("./models/HelpsWith");
const AffectedBy = require("./models/AffectedBy");

module.exports = function(req, res, next) {
  req.db = {
    Condition,
    User,
    Product,
    HelpsWith,
    AffectedBy
  };
  next();
};
