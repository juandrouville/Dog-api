
const server = require('./src/app');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen( process.env.PORT || 3001 , () => {
    console.log(process.env.PORT); // eslint-disable-line no-console
  });
});
