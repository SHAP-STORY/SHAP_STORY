CREATE DATABASE backend;
USE backend;
CREATE TABLE User (id VARCHAR(30), passwd VARCHAR(16), name VARCHAR(255), grade INT(20));
CREATE TABLE BaseClass (contant VARCHAR(255), title VARCHAR(255), INDEX num (title));
CREATE TABLE HardClass (contant VARCHAR(255), title VARCHAR(255), INDEX num (title));
CREATE TABLE LessonRate(id VARCHAR(30), complete TINYINT(1), class_num INT(1000), level VARCHAR(4));