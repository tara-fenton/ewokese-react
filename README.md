# EwokeseApp
Chat application that allows users to send messages to each other.

## Description

This app allows the user to register a username, nickname, and password. Guess what? That password is hashed and gives the user a token successfully! With this token, the user can see and update their own nickname in their profile. In the main page, the user has access to clicking on the name of the conversations to toggle the messages to show up in the view window.

## Approach
As a team, we collaborated on a Google Doc to pitch which included the pages and models we believed our EwokeseApp would have. Since the app is a messaging app, it requires users. We discussed the importance of Authentication and Authorization and it's requirement in the Minimal Viable Product (MVP). In the beginning, we figured we would need the following models:
User - for Authentication purposes (which also has the option to edit the nickname)
Conversation - Which users can create
Message - Allows users to create messages and store in our database.

## Wireframes and user stories
As a user, I want a seamless way to message my friends instantly so I can maintain a relationship with them.

As someone with bad memory, I want a way to look back at conversation history so I can continue having meaningful conversations with my friends.

As a user, I want a profile page, so I can feel like it is personal.

As a user, I want to find a friend so I can start a conversation with them.

As a chatty Cathy, I want the ability to start conversations with anyone easily, so I can convince them to like me.

As an adulteress, I want an app that lets me talk to my partner so no one will find out.

As a user, I want to to send emojis to my friends because the are cute and make me happy.

As a user, I want to switch between conversations easily so my experience is quick.

As a user, I want to change my username just in case I get bored with it.

![alt text](/src/Wireframes/EwokeseAppWireframes-01.png)

##Technologies

[Socket.io] (https://socket.io/) - Software used to send messages in real time.

[Internal Emojis] (https://github.com/missive/emoji-mart) - Modules and components added to an input field that gives all users access to the same emojis regardless of their browser or mobile device.
```
yarn add emoji-mart
```

In component being used
```javascript
import { Picker } from 'emoji-mart';
```

## Dependencies
For server
```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "bluebird": "^3.5.1",
  "body-parser": "^1.18.2",
  "cors": "^2.8.4",
  "eslint": "^4.19.1",
  "express": "^4.16.3",
  "jsonwebtoken": "^8.2.1",
  "pg-monitor": "^0.9.2",
  "pg-promise": "^8.2.3",
  "react": "^16.3.1",
  "react-dom": "^16.3.1",
  "react-if-elseif-else-render": "^1.0.2",
  "react-router-dom": "^4.2.2",
  "react-scripts": "^1.1.4"
}
```
For front-end
```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "express": "^4.16.3",
  "nodemon": "^1.17.3",
  "react": "^16.3.1",
  "react-bootstrap": "^0.32.1",
  "react-dom": "^16.3.1",
  "react-if-elseif-else-render": "^1.0.2",
  "react-router-dom": "^4.2.2",
  "react-scripts": "1.1.4"
}
```
