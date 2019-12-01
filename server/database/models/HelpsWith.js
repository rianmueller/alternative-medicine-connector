const bookshelf = require("../bookshelf");

class HelpsWith extends bookshelf.Model {
  get tableName() {
    return "helps_with";
  }

  get hasTimestamps() {
    return true;
  }

  product() {
    return this.hasOne("Product", "name", "product_name");
  }

  condition() {
    return this.hasOne("Condition", "name", "condition_name");
  }
}

module.exports = bookshelf.model("HelpsWith", HelpsWith);
