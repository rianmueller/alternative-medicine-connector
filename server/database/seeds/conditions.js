
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {name: 'rowValue1',description:'N/A'},
        {name: 'rowValue2',description:'N/A'},
        {name: 'rowValue3',description:'N/A'}
      ]);
    });
};
