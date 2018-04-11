// USER MODEL !!! this is my crud!!! :)
const db = require("../database/index");

const User = {};
// findAll RRRRR
User.findAll = () => db.any("SELECT * FROM venues ORDER BY id");

module.exports = User;
