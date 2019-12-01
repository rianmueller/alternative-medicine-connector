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

  products() {
    return this.hasMany("Product");
  }
}

module.exports = bookshelf.model("User", User);
