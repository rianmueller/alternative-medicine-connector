exports.up = function(knex) {
  return knex.schema.createTable("affected_by", table => {
    table.increments();
    table.integer("user_id").notNullable();
    table.integer("condition_id").notNullable();
    table.unique(["user_id", "condition_id"]);
    table
      .foreign("user_id")
      .references("id")
      .inTable("users");
    table
      .foreign("condition_id")
      .references("id")
      .inTable("conditions");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("affected_by");
};
