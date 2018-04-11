const promise = require('bluebird');
const monitor = require('pg-monitor');

promise.config({
  longStackTraces: true,
});

const initOptions = {
  promiseLib: promise,
};

monitor.attach(initOptions);

const pgp = require('pg-promise')(initOptions);

const connectionURL = 'postgres://localhost:5432/ewokese_app';

const db = pgp(connectionURL);

module.exports = db;
