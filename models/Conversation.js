const db = require('../database/db-connection');

const Conversation = {};

// find all conversations
Conversation.findAll = () => db.any('SELECT * FROM conversations ORDER BY id');

// find one conversation
Conversation.findById = id => db.one('SELECT * FROM user WHERE id= $1', [id]);

// create new conversation
Conversation.create = (newConversation) => {
  return db.one('INSERT INTO conversations(id, name) VALUES($1, $2) RETURNING id', [
    newConversation.id,
    newConversation.name
  ]);
};

Conversation.delete = (id) => {
  return db.result('DELETE FROM conversations WHERE id = $1', [id]);
}

module.exports = Conversation;
