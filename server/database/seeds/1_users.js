exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Inactive User",
          email: "inactive@newmail.com",
          password: "N/A",
          user_status_id: 2
        },
        {
          name: "Art",
          email: "art@newmail.com",
          password: "N/A",
          user_status_id: 1
        },
        {
          name: "Rian",
          email: "rian@newmail.com",
          password: "N/A",
          user_status_id: 1
        },
        {
          name: "Keith",
          email: "kieth@newmail.com",
          password: "N/A",
          user_status_id: 1
        }
      ]);
    });
};
