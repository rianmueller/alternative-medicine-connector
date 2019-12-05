exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("affected_by")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("affected_by").insert([
        { user_id: 1, condition_id: 2 },
        { user_id: 1, condition_id: 7 },
        { user_id: 1, condition_id: 13 },
        { user_id: 1, condition_id: 14 }
      ]);
    });
};
