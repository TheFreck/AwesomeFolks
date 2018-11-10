DROP DATABASE IF EXISTS greedyBastards;
CREATE DATABASE greedyBastards;
USE greedyBastards;

CREATE TABLE users(
    id AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(100),
    PRIMARY KEY(id)
);
CREATE TABLE gifts(
    id AUTO_INCREMENT NOT NULL,
    item varchar(100),
    url varchar(255),
    category varchar(255),
    price DECIMAL(10,2),
    comments varchar(255),
    purchased BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

var object = {
    id: 0,
    item: "name",
    url: "url",
    category: "category",
    priceRange: 1,
    comments: "notes to add",
    purchased: false
}