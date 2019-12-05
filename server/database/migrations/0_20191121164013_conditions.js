exports.up = function(knex) {
  return knex.schema.createTable("conditions", table => {
    table.increments();
    table
      .string("name")
      .unique()
      .notNullable();
    table.text("description");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("conditions");
};
