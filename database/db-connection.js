// const promise = require('bluebird');
// const monitor = require('pg-monitor');
//
// promise.config({
//   longStackTraces: true,
// });
//
// const initOptions = {
//   promiseLib: promise,
// };
//
// monitor.attach(initOptions);
//
// const pgp = require('pg-promise')(initOptions);
//
// const connectionURL = 'postgres://localhost:5432/ewokese_app';
//
// const db = pgp(connectionURL);
//
// module.exports = db;

const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    // Fill in with your local database name
    database: 'ewokese_app', 
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
    // Heroku will set this variable for you.
    db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
