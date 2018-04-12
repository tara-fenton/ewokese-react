// MESSAGE MODEL !!! this is my crud!!! :)
const db = require('../database/db-connection');

const Message = {};
// findAll RRRRR
Message.findAll = () => db.any('SELECT * FROM messages ORDER BY id');

//find message by id
Message.findBySenderId = (sender_id) => db.any('SELECT * FROM messages WHERE sender_id = $1', [sender_id]);

Message.findByConversationId = (conversation_id) => db.any('SELECT * FROM messages WHERE conversation_id = $1', [conversation_id]);

Message.create = (newMessage) => {
  return db.one('INSERT INTO messages(sender_id, conversation_id, message) VALUES($1, $2, $3) RETURNING id',[
    newMessage.sender_id,
    newMessage.conversation_id,
    newMessage.message
  ]);
}

Message.delete = id => {
  return db.result('DELETE FROM messages WHERE id = $1', [id]);
}

Message.senderDelete = sender_id => {
  return db.result('DELETE FROM messages WHERE sender_id = $1', [sender_id]);
}



module.exports = Message;


//create,  and delete
