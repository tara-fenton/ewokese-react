const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

// const bodyParser = require('body-parser');
// const FileStore = require("session-file-store")(session);

// import models
const User = require('./models/User');

app.get('/api/users', (request, response) => {
  User.findAll().then((users) => {
    // render the list of users
    response.json(users);
  });
});


app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
