exports.up = function(knex) {
  return knex.schema.createTable("helps_with", table => {
    table.increments();
    table.integer("product_id").notNullable();
    table.integer("condition_id").notNullable();
    table.unique(["product_id", "condition_id"]);
    table
      .foreign("product_id")
      .references("id")
      .inTable("products");
    table
      .foreign("condition_id")
      .references("id")
      .inTable("conditions");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("helps_with");
};
