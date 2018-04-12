// USER MODEL
const db = require('../database/db-connection');

const User = {};

// find all users
User.findAll = () => db.any('SELECT * FROM users ORDER BY id');

// find one user
User.findById = id => db.one('SELECT * FROM users WHERE id= $1', [id]);

// create a new user
User.create = (username, password, nickname) =>
  db.one('INSERT INTO users (user_name, hashed_password, nick_name) VALUES ($1, $2, $3)', [
    username,
    password,
    nickname,
  ]);

// edit a users name, password and nickname
User.edit = user =>
  db.one('UPDATE users SET user_name = $1, hashed_password = $2, nick_name = $3 WHERE id= $4 RETURNING id', [
    user.username,
    user.password,
    user.nickname,
    user.userId,
  ]);

module.exports = User;
