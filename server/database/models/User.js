const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }
  userStatuses() {
    return this.belongsTo("Conditions");
  }
}

module.exports = bookshelf.model("User", User);
