const bookshelf = require("../bookshelf");

class Product extends bookshelf.Model {
  get tableName() {
    return "products";
  }

  get hasTimestamps() {
    return true;
  }

  idAttribute() {
    return "name";
  }

  user() {
    return this.hasOne("User", "id", "user_id");
  }

  conditions() {
    return this.belongsToMany("Condition", "helps_with");
  }
}

module.exports = bookshelf.model("Product", Product);
