const bookshelf = require("../bookshelf");

class Product extends bookshelf.Model {
  get tableName() {
    return "products";
  }

  get hasTimestamps() {
    return true;
  }

  helps_with() {
    return this.hasMany("HelpsWith", "id", "helps_with_id");
  }

  strain_of() {
    return this.hasOne("StrainOf", "id", "strain_of_id");
  }

  tastes_like() {
    return this.hasMany("TastesLike", "id", "tastes_like_id");
  }

  owned_by() {
    return this.hasOne("OwnedBy", "id", "user_id");
  }
}

module.exports = bookshelf.model("Product", Product);
