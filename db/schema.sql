DROP DATABASE IF EXISTS rookies_db;

CREATE DATABASE rookies_db;

USE rookies_db;

CREATE TABLE teams (
    id INT NOT NULL,
    city VARCHAR (30) NOT NULL,
    team_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE positions (
    id INT NOT NULL,
    position VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE players (
    id INT NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    position_id INT,
    team_id INT,
    FOREIGN KEY (position_id)
    REFERENCES positions(id),
    FOREIGN KEY (team_id)
    REFERENCES teams(id),
    PRIMARY KEY (id)
);

<<<<<<< HEAD

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
)
ENGINE=InnoDB AUTO_INCREMENT=2
DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `userName`, `password`, `email`)
VALUES 
(1, 'test', 'test', 'test@test.com');
ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
=======
>>>>>>> d66d50f4c641b6502a29791bab57b9af7eef2127
