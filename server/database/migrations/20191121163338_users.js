
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.integer('condition_id').references('id').inTable('conditions');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
