DROP DATABASE;
CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE User(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    pass VARCHAR(30) NOT NULL
);