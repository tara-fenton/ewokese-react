CREATE DATABASE ewokese_app;

\c ewokese_app;

DROP TABLE users CASCADE;
DROP TABLE conversations CASCADE;
DROP TABLE messages CASCADE;
DROP TABLE user_conversations CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  nickname VARCHAR(255)
);

CREATE TABLE conversations (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  user_array INTEGER[]
);

CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES users(id),
  conversation_id INTEGER REFERENCES conversations(id),
  message VARCHAR(255)
);

CREATE TABLE user_conversations (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  conversation_id INTEGER REFERENCES conversations(id)
);
