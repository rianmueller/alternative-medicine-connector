const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }

  get hasTimestamps() {
    return true;
  }

  userStatus() {
    return this.hasOne("UserStatus");
  }

  conditions() {
    return this.belongsToMany("Condition", "affected_by");
  }

  products() {
    return this.hasMany("Product");
  }
}

module.exports = bookshelf.model("User", User);
