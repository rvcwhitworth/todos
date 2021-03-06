DROP DATABASE IF EXISTS todoList;

CREATE DATABASE todoList;
USE todoList;

CREATE TABLE todos (
  id int NOT NULL AUTO_INCREMENT,
  createdOn VARCHAR(25) NOT NULL,
  todoDescription VARCHAR(140) NOT NULL,
  completed Boolean NOT NULL,
  PRIMARY KEY (id)
);