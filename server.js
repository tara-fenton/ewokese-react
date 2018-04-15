const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cors = require('cors');
const tokenService = require('./services/TokenService');



const app = express();
app.use(cors());

app.set('port', process.env.PORT || 3000);

// const bodyParser = require('body-parser');
// const FileStore = require("session-file-store")(session);

// import models
const Conversation = require('./models/Conversation');
const User = require('./models/User');
const Message = require('./models/Message');

// get all users
app.get('/api/users', (request, response) => {
  User.findAll().then((users) => {
    // render the list of users
    response.json(users);
  });
});

app.get('/api/conversations', (request, response) => {
  Conversation.findAll().then((conversations) => {
    // render the list of users
    response.json(conversations);
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

// ROUTES FOR USER AUTH

app.post('/api/user/new', jsonParser, (request, response) => {
  User.create(request.body)
    .then(data => tokenService.makeToken({
      username: data
    }))
    .then((token) => {
      response.json({
        token
      })
    })
});

// if the user didn't get created thrown an error
// else include the user and token in the response
app.post('/login', jsonParser, (request, response) => {
  console.log(request.body)
  User.login(request.body)
    .then(data => tokenService.makeToken({
      username: data
    }))
    .then((token) => {
      response.json({
        token
      })
    })
    .catch(err => console.log(`throwing an error: ${err}`));
});


app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
