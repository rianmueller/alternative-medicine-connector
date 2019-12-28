const knex = require("./server/database/knex");
const DELAY = 3000;

function testConnection() {
  return new Promise(resolve => {
    setTimeout(() => {
      knex.migrate
        .latest()
        .then(resolve)
        .catch(() => {
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
  // run server
  .then(() => {
    require("./server/server");
  })
  .catch(err => {
    process.exit(1);
  });
