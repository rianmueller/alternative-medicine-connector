const nodemon = require("nodemon");
const knex = require("./server/database/knex");

const DELAY = 3000;

function testConnection() {
  return new Promise(resolve => {
    setTimeout(() => {
      knex.migrate
        .latest()
        .then(resolve)
        .catch(err => {
          resolve(testConnection());
        });
    }, DELAY);
  });
}

// migrate db
testConnection()
  // run seeds
  .then(() => {
    knex.seed.run();
  })
  // print status
  .then(() => {})
  // run server using nodemon
  .then(() => {
    nodemon({
      script: "./server/server.js",
      ext: "js json",
      ignore: ["src/"]
    });

    nodemon
      .on("start", function() {})
      .on("quit", function() {
        process.exit();
      })
      .on("restart", function(files) {});
  })
  .catch(err => {
    process.exit(1);
  });
