const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cors = require('cors');
const tokenService = require('./services/TokenService');
const app = express();
const path = require('path');

// SOCKET TESTING
// const http = require('http').Server(app);
// const io = require('socket.io')(http);



app.use(cors());
// if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "build")));
// }

// app.set('port', process.env.PORT || 3000);
const PORT = process.env.PORT || 4567;


// const bodyParser = require('body-parser');
// const FileStore = require("session-file-store")(session);

// import models
const Conversation = require('./models/Conversation');
const User = require('./models/User');
const Message = require('./models/Message');

// SOCKET TESTING
// app.get('/', (req, res) => {
//   // res.sendFile('/public/socket_index.html');
//   res.sendFile(`${__dirname}/public/socket_index.html`);
// });
// app.get('/socket.io/socket.io.js', function(req, res){
//   res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
// });

// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });
// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);
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
// get user by id
app.get('/api/username/:name', (request, response) => {
  const userName = request.params.name;
  // console.log(userId);
  User.findByUsername(userName).then((user) => {
    // render the user
    response.json(user);
  });
});
// edit nickname of user profile
app.put('/api/user/:id', jsonParser, (request, response) => {
  const userId = request.params.id;
  const userUpdate = request.body;
  User.update(userUpdate, userId).then(user => {
    response.json({ message: "updated" });
  });
});
// delete user
// profile/${cachedUser}/delete
app.delete('/api/profile/:id/delete', jsonParser, (request, response) => {
  const id = request.params.id;
  Message.delete(id)
    .then((id) => {
      // TO DO redirect to /login
      // response.json(id);
      // redirect("/")
    });
});

app.delete('/api/messages/:id', jsonParser, (request, response) => {
  const id = request.params.id;
  Message.delete(id)
    .then((id) => {
      response.json(id);
    });
});

app.delete('/api/messages/sender/:id', jsonParser, (request, response) => {
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


app.post('/api/messages/new/message', jsonParser, (request, response) => {
  const newMessage = request.body;
  const id = parseInt(request.params.id);
  console.log(newMessage);
  Message.create(newMessage)
    .then((newMessage) => {
      response.json(newMessage);
    });
});

// messages api/messages/${cachedUser}/${this.state.conversationSelected}
app.post('/api/messages/:userId/:convoId', jsonParser, (request, response) => {
  const userId = request.params.userId;
  const convoId = request.params.convoId;
  const newMessage = request.body.message;
  console.log("called in server js ",userId, convoId, newMessage)
  Message.create(userId, convoId, newMessage).then(user => {
    response.json({ message: "updated" });
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

// SOCKET TESTING
// http.listen(app.get('port'), () => {
//   console.log('Node app is running on port', app.get('port'));
// });

// app.listen(app.get('port'), () => {
//   console.log('Node app is running on port', app.get('port'));
// });
// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
