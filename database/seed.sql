\c ewokese_app

INSERT INTO users (user_name, hashed_password, nick_name)
VALUES
('jordan', 'dog', 'lickway'),
('tara', 'cat', 'tarbear'),
('m.e.', 'birds', 'me');

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
