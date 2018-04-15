\c ewokese_app
-- jordan-dog tara-cat m.e.-bird
INSERT INTO users (user_name, hashed_password, nick_name)
VALUES
('jordan', '$2a$10$FkYp6gAEjOlnjm2GCCnTM.5X8gR.hn3fuddjKjeWU6PcFVF5UC47.', 'lickway'),
('tara', '$2a$10$Pket82OvHjsul1Ne0GoF3uUmMPMP8JZVH6VWnmV/ayps1T.JyYWrW', 'tarbear'),
('m.e.', '$2a$10$y2Q.0r9OWz/xt4qxoOC9be24k6Omruz7lBIe1bNddGvMPZan5mFcO', 'me');

INSERT INTO conversations (name)
VALUES
('ewokese'),
('coding'),
('homework');

INSERT INTO messages (user_id, conversation_id, message)
VALUES
(1, 1, 'jordan message in ewokese'),
(2, 1, 'tara message in ewokese'),
(3, 1, 'm.e. message in ewokese'),
(1, 2, 'jordan message in coding'),
(2, 2, 'tara message in coding'),
(2, 3, 'tara message in homework'),
(3, 3, 'm.e. message in homework');

INSERT INTO user_conversations (user_id, conversation_id)
VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 3);
