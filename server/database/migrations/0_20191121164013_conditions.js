exports.up = function(knex) {
  return knex.schema.createTable("conditions", table => {
    table.increments();
    table.string("name").notNullable();
    table.text("description").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("conditions");
};
