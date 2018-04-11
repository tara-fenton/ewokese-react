CREATE DATABASE ewokese_app;

\c ewokese_app;

DROP TABLE user;
DROP TABLE conversation;
DROP TABLE messages;
DROP TABLE user_conversations;

CREATE TABLE user (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  nickname VARCHAR(255)
);

CREATE TABLE conversation (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  user_array VARCHAR(255) REFERENCES user(id)
);

CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES user(id),
  conversation_id INTEGER REFERENCES conversation(id)
);

CREATE TABLE user_conversations (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(id),
  conversation_id INTEGER REFERENCES conversation(id)
);
