CREATE DATABASE story;
USE story;
CREATE TABLE Student (`id` VARCHAR(255), `passwd` VARCHAR(255), `name` VARCHAR(255), `grade` INT(255), `phone_number` INT(255));
CREATE TABLE Post (title VARCHAR(255), body VARCHAR(255), show TINYINT(1), student_id VARCHAR(255), date DATETIME DEFAULT NOW());
CREATE TABLE Subject (title VARCHAR(255), contents VARCHAR(255), type VARCHAR(255)  INDEX classid (title));
CREATE TABLE LessonRate(class_id INT(255), student_id VARCHAR(255), complete TinyINT(1));