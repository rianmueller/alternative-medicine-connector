exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("affected_by")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("affected_by").insert([
        { user_id: 2, condition_name: "Anxiety" },
        { user_id: 2, condition_name: "Menstrual Cramps" },
        { user_id: 2, condition_name: "Migraines" },
        { user_id: 2, condition_name: "Concentration" }
      ]);
    });
};
