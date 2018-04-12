// USER MODEL
const db = require('../database/db-connection');

const User = {};

// find all users
User.findAll = () => db.any('SELECT * FROM users ORDER BY id');

// find one user
User.findById = id => db.one('SELECT * FROM users WHERE id= $1', [id]);

// create a new user
User.create = (username, password, nickname) =>
  db.one('INSERT INTO users (username, password, nickname) VALUES ($1, $2, $3)', [
    username,
    password,
    nickname,
  ]);

// edit a users name, password and nickname
User.edit = user =>
  db.one('UPDATE users SET username = $1, password = $2, nickname = $3 WHERE id= $4 RETURNING id', [
    user.username,
    user.password,
    user.nickname,
    user.userId,
  ]);

module.exports = User;
