exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("conditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("conditions").insert([
        { name: "ADHD", description: "N/A" },
        { name: "Anxiety", description: "N/A" },
        { name: "Appetite Loss", description: "N/A" },
        { name: "Arthritis", description: "N/A" },
        { name: "Back Pain", description: "N/A" },
        { name: "Chronic Pain", description: "N/A" },
        { name: "Concentration", description: "N/A" },
        { name: "Depression", description: "N/A" },
        { name: "Eye Pressure", description: "N/A" },
        { name: "Fatigue", description: "N/A" },
        { name: "Inflammation", description: "N/A" },
        { name: "Insomnia", description: "N/A" },
        { name: "Menstrual Cramps", description: "N/A" },
        { name: "Migraines", description: "N/A" },
        { name: "Mood Swings", description: "N/A" },
        { name: "Muscle Pain", description: "N/A" },
        { name: "Muscle Spasms", description: "N/A" },
        { name: "Nauseous", description: "N/A" },
        { name: "Social Anxiety", description: "N/A" },
        { name: "Stress", description: "N/A" }
      ]);
    });
};
