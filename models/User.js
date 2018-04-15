// USER MODEL
const db = require('../database/db-connection');
const bcrypt = require('bcryptjs');

module.exports = {
  findAll() {
    return db.any('SELECT * FROM users ORDER BY id');
  },

  findById(id) {
    return db.one('SELECT * FROM users WHERE id= $1', [id]);
  },

  create(userData) {
    console.log(userData)
    const passwordDigest = bcrypt.hashSync(userData.password, 10);
    console.log(passwordDigest)
    return db.one(
      `
      INSERT INTO users (user_name, hashed_password, nick_name)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
      [userData.username, passwordDigest, userData.nickname]
    );
  },

  findByUsername(username) {
    return db.one('SELECT * FROM users WHERE user_name = $1;', [username]);
  },

  login(user) {
    return this.findByUsername(user.username).then((userData) => {
      const isAuthed = bcrypt.compareSync(
        user.password,
        userData.hashed_password
      );
      if (!isAuthed) throw new Error('Invalid Credentials');
      return userData;
    });
  }
};
