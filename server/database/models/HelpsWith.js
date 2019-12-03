const bookshelf = require("../bookshelf");

class HelpsWith extends bookshelf.Model {
  get tableName() {
    return "helps_with";
  }

  get hasTimestamps() {
    return true;
  }

  product() {
    return this.hasOne("Product", "id", "product_id");
  }

  condition() {
    return this.hasOne("Condition", "id", "condition_id");
  }
}

module.exports = bookshelf.model("HelpsWith", HelpsWith);
