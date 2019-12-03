exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("conditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("conditions").insert([
        { name: "ADHD", description: "N/A" }, // 1
        { name: "Anxiety", description: "N/A" }, // 2
        { name: "Appetite Loss", description: "N/A" }, // 3
        { name: "Arthritis", description: "N/A" }, // 4
        { name: "Back Pain", description: "N/A" }, // 5
        { name: "Chronic Pain", description: "N/A" }, // 6
        { name: "Concentration", description: "N/A" }, // 7
        { name: "Depression", description: "N/A" }, // 8
        { name: "Eye Pressure", description: "N/A" }, // 9
        { name: "Fatigue", description: "N/A" }, // 10
        { name: "Inflammation", description: "N/A" }, // 11
        { name: "Insomnia", description: "N/A" }, // 12
        { name: "Menstrual Cramps", description: "N/A" }, // 13
        { name: "Migraines", description: "N/A" }, // 14
        { name: "Mood Swings", description: "N/A" }, // 15
        { name: "Muscle Pain", description: "N/A" }, // 16
        { name: "Muscle Spasms", description: "N/A" }, // 17
        { name: "Nauseous", description: "N/A" }, // 18
        { name: "Social Anxiety", description: "N/A" }, // 19
        { name: "Stress", description: "N/A" } // 20
      ]);
    });
};
