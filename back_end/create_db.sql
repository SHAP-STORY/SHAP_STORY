CREATE DATABASE story;
USE story;
CREATE TABLE Student (
  `id` VARCHAR(255) NOT NULL,
  `passwd` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `grade` INT(255) NOT NULL,
  `phone_number` CHAR(11) NOT NULL,
  PRIMARY KEY(id)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE Post (
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  show TINYINT(1),
  student_id VARCHAR(255),
  date DATETIME DEFAULT NOW()
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE Subject (
  title VARCHAR(255),
  contents VARCHAR(255),
  type VARCHAR(255) INDEX classid (title)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
CREATE TABLE LessonRate(
  class_id INT(255),
  student_id VARCHAR(255),
  complete TinyINT(1)
) CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;