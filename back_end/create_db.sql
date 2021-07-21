CREATE DATABASE backend;
USE backend;
CREATE TABLE User (id VARCHAR(25) PK, passwd VARCHAR(255), name VARCHAR(255), grade INT(20));
CREATE TABLE BaseClass (contant VARCHAR(255), title VARCHAR(255), INDEX num (title));
CREATE TABLE HardClass (contant VARCHAR(255), title VARCHAR(255), INDEX num (title));
CREATE TABLE LessonRate(id VARCHAR(255) PK, complete TINYINT(1), class_num INT(255), level VARCHAR(4));