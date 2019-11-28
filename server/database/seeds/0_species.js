exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("species")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("species").insert([
        { name: "Indica", description: "N/A" },
        { name: "Sativa", description: "N/A" },
        { name: "Hybrid", description: "N/A" }
      ]);
    });
};
