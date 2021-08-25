CREATE DATABASE story;
USE story;
CREATE TABLE Student (
  `id` VARCHAR(255) NOT NULL,
  `passwd` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `grade` INT(255) NOT NULL,
  `img ` VARCHAR(1024),
  `phone_number` CHAR(11) NOT NULL,
  PRIMARY KEY(id)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE Post (
  `title` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `show` TINYINT(1) NOT NULL,
  `student_id` VARCHAR(255) NOT NULL,
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE BasicSubject (
  `index` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `contents` VARCHAR(255),
  `type` VARCHAR(255)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE HardSubject (
  `index` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `contents` VARCHAR(255),
  `type` VARCHAR(255)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE LessonRate(
  `class_id` INT(255) NOT NULL,
  `student_id` VARCHAR(255) NOT NULL,
  `complete` TINYINT(1) NOT NULL,
  `url` VARCHAR(255)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;