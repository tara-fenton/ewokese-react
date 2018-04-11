const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

// const bodyParser = require('body-parser');
// const FileStore = require("session-file-store")(session);

// import models
const User = require('./models/User');

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


app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
