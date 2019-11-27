exports.up = function(knex) {
  return knex.schema.createTable("products", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("url");
    table.string("type");
    table.string("helps_with");
    table.string("tastes_like");
    table.string("thc_content");
    table.string("cbd_content");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
