\c ewokese_app

INSERT INTO users (username, password, nickname)
VALUES
('jordan', 'dog', 'lickway'),
('tara', 'cat', 'tarbear'),
('m.e.', 'birds', 'me');

INSERT INTO conversations (name, user_array)
VALUES
('ewokese', '{1, 2, 3}'),
('coding', '{1, 2}'),
('homework', '{2, 3}');

INSERT INTO messages (sender_id, conversation_id, message)
VALUES
(1, 1, 'jordan message in ewokese'),
(2, 1, 'tara message in ewokese'),
(3, 1, 'm.e. message in ewokese'),
(1, 2, 'jordan message in coding'),
(2, 2, 'tara message in coding'),
(2, 3, 'tara message in homework'),
(3, 3, 'm.e. message in homework');
--
-- INSERT INTO user_conversations (user_id, conversation_id)
-- VALUES
-- (1, 1),
-- (2, 2),
-- (3, 3);

-- doesnt like the brackets
