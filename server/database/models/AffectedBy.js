const bookshelf = require("../bookshelf");

class AffectedBy extends bookshelf.Model {
  get tableName() {
    return "affected_by";
  }

  get hasTimestamps() {
    return true;
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }

  condition() {
    return this.hasOne("Condition", "name", "condition_name");
  }
}

module.exports = bookshelf.model("AffectedBy", AffectedBy);
