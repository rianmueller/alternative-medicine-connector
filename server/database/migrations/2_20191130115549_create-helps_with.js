exports.up = function(knex) {
  return knex.schema.createTable("helps_with", table => {
    table.increments();
    table.string("product_name").notNullable();
    table.string("condition_name").notNullable();
    table.unique(["product_name", "condition_name"]);
    table
      .foreign("product_name")
      .references("name")
      .inTable("products");
    table
      .foreign("condition_name")
      .references("name")
      .inTable("conditions");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("helps_with");
};
