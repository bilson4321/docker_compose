CREATE USER IF NOT EXISTS 'hello'@'%' IDENTIFIED WITH BY 'hello1234';

GRANT ALL PRIVILEGES ON *.* TO 'hello'@'%';

CREATE DATABASE IF NOT EXISTS `contacts`;

USE `contacts`;

CREATE TABLE IF NOT EXISTS `user` (
	id int PRIMARY KEY auto_increment,
	name varchar(255),
	image varchar(255),
	address varchar(255),
	phone_number varchar(255));
