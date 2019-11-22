const Condition = require("./models/Conditions");
const User = require("./models/User");


module.exports = function (req, res, next) {
  req.db = {
    Condition,
    User
  };
  next();
};