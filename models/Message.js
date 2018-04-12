// MESSAGE MODEL !!! this is my crud!!! :)
const db = require('../database/db-connection');

const Message = {};
// findAll RRRRR
Message.findAll = () => db.any('SELECT * FROM conversations ORDER BY id');

//find message by id
Message.findById = () => db.one('SELECT * FROM conversations WHERE id = $1', [id]);


module.exports = Message;
