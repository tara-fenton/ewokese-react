// USER MODEL !!! this is my crud!!! :)
const db = require('../database/db-connection');

const User = {};
// findAll RRRRR
User.findAll = () => db.any('SELECT * FROM users ORDER BY id');

module.exports = User;
