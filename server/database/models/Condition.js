const bookshelf = require("../bookshelf");

class Condition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }

  get hasTimestamps() {
    return true;
  }

  helps_with() {
    return this.hasMany("HelpsWith", "id", "helps_with_id");
  }
}

module.exports = bookshelf.model("Condition", Condition);
