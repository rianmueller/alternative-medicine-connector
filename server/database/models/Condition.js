const bookshelf = require("../bookshelf");

class Condition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }

  get hasTimestamps() {
    return true;
  }

  products() {
    return this.belongsToMany("Product", "helps_with");
  }
}

module.exports = bookshelf.model("Condition", Condition);
