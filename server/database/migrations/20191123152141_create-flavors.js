exports.up = function(knex) {
  return knex.schema.createTable("flavors", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("description");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("flavors");
};
