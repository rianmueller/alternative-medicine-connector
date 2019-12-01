exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Art",
          email: "art@newmail.com",
          password: "N/A",
          conditions: ""
        },
        {
          name: "Rian",
          email: "rian@newmail.com",
          password: "N/A",
          conditions: ""
        },
        {
          name: "Keith",
          email: "kieth@newmail.com",
          password: "N/A",
          conditions: ""
        }
      ]);
    });
};
