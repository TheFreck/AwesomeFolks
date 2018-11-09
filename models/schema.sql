DROP DATABASE IF EXISTS dontForget;
CREATE DATABASE dontForget;

CREATE TABLE users(
    id AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    phone INT(10),
    email varchar(100),
    dob DATE,
    PRIMARY KEY(id)
);
CREATE TABLE gifts(
    id AUTO_INCREMENT NOT NULL,
    item varchar(100),
    url varchar(255),
    category varchar(255),
    price FLOAT(),
    comments varchar(255)
);
