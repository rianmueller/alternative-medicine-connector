
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'rowValue1',email: 'art@newmail.com',password:'N/A',condition_id:1},
        {name: 'rowValue2',email: 'rian@newmail.com',password:'N/A',condition_id:1},
        {name: 'rowValue3',email: 'kieth@newmail.com',password:'N/A',condition_id:1}
      ]);
    });
};
