const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.set('port', process.env.PORT || 3000);

// const bodyParser = require('body-parser');
// const FileStore = require("session-file-store")(session);

// import models
const User = require('./models/User');
const Message = require('./models/Message');

// get all users
app.get('/api/users', (request, response) => {
  User.findAll().then((users) => {
    // render the list of users
    response.json(users);
  });
});

// get user by id
app.get('/api/user/:id', (request, response) => {
  const userId = request.params.id;
  console.log(userId);
  User.findById(userId).then((user) => {
    // render the user
    response.json(user);
  });
});
app.delete('/api/messages/:id', urlencodedParser, (request, response) => {
  const id = request.params.id;
  Message.delete(id)
    .then((id) => {
      response.json(id);
    });
});

app.delete('/api/messages/sender/:id', urlencodedParser, (request, response) => {
  const sender_id = request.params.id;
  Message.senderDelete(sender_id)
    .then((sender_id) => {
      response.json(sender_id);
    });
});

app.get('/api/messages', (request, response) => {
  Message.findAll()
    .then((allMessages) => {
      response.json(allMessages);
    });
});

app.get('/api/messages/sender/:id', (request, response) => {
  const senderId = request.params.id
  console.log(senderId);
  Message.findBySenderId(senderId)
    .then((sender) => {
      response.json(sender);
    });
});

app.get('/api/messages/conversation/:id', (request, response) => {
  const conversationId = request.params.id
  console.log(conversationId);
  Message.findByConversationId(conversationId)
    .then((conversation) => {
      response.json(conversation);
    });
});


app.post('/api/messages/new/message', urlencodedParser, (request, response) => {
  const newMessage = request.body;
  const id = parseInt(request.params.id);
  console.log(newMessage);
  Message.create(newMessage)
    .then((newMessage) => {
      response.json(newMessage);
    });
});


app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
