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